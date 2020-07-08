const next = require("next")
const http = require("http")
const isType = require('type-is')

const app = next({dir: './pr-preview-ssr/code', customServer: false})
const handler = app.getRequestHandler()

const  getSocketPath = (socketPathSuffix) => {
    if (/^win/.test(process.platform)) {
        const path = require('path')
        return path.join('\\\\?\\pipe', process.cwd(), `server-${socketPathSuffix}`)
    } else {
        return `/tmp/server-${socketPathSuffix}.sock`
    }
}

const getRandomString = () => {
    return Math.random().toString(36).substring(2, 15)
}

const getContentType = (params) => {
    return params.contentTypeHeader ? params.contentTypeHeader.split(';')[0] : ''
}

const isContentTypeBinaryMimeType = (params) => {
    return params.binaryMimeTypes.length > 0 && !!isType.is(params.contentType, params.binaryMimeTypes)
}

const createServer = (context) => {
    
    const server = http.createServer((req, res ) => {
        return handler(context.req, res)
    })
    
    server._socketPathSuffix = getRandomString()
    server.on('listening', () => {
        server._isListening = true
        context.log(`server listening ${server._socketPathSuffix}`)
        
    })
    server.on('close', () => {
            server._isListening = false
            context.log('server closed')
        })
        .on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                context.warn(`WARNING: Attempting to listen on socket ${getSocketPath(server._socketPathSuffix)}, but it is already in use.`)
                server._socketPathSuffix = getRandomString()
                return server.close(() => startServer(server))
            } else {
                context.log('ERROR: server error')
                context.error(error)
            }
        })
    
    return server
}

const createRequest = (context, req, server) => {
    
    let url = new URL(context.req.url)
    let pathname = url.pathname
    
    const requestOptions = {
        path: pathname,
        method: req.method,
        headers: Object.assign({}, req.headers),
        socketPath: getSocketPath(server._socketPathSuffix)
    }
    
    const request = http.request(requestOptions, (res) => {
        const buffer = []
        
        res.on('data', (chunk) => buffer.push(chunk))
        
        res.on("end", () => {
            const bodyBuffer = Buffer.concat(buffer)
            const statusCode = res.statusCode
            const headers = res.headers
            
            if (headers['transfer-encoding'] === 'chunked') {
                delete headers['transfer-encoding']
            }
            
            const contentType = getContentType({contentTypeHeader: headers['content-type']})
            const isBase64Encoded = isContentTypeBinaryMimeType({contentType, binaryMimeTypes: ['*/*']})
            const body = bodyBuffer
            
            context.res = {statusCode, body, headers, isBase64Encoded}
            context.done()
            
            return server
        });
    }).on("error", (error) => {
        context.log('error');
        context.res = {
            status: 500,
            body: error
        };
        context.done()
    })
    request.end()
}

const startServer = (server) => server.listen(getSocketPath(server._socketPathSuffix))


exports.createServer = createServer
exports.createRequest = createRequest
exports.startServer = startServer