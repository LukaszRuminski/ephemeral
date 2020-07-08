process.env.AZURE_FUNCTION = true
process.env.NODE_ENV = "production"

// const azureFunctionHandler = require('./handler')
// const {server} = require('./code/ephemeral')

const next = require("next")
const http = require("http")
const isType = require('type-is')

const app = next({dir: './pr-preview-ssr/code', customServer: false})
const handler = app.getRequestHandler()

// module.exports = azureFunctionHandler(server)

function getSocketPath (socketPathSuffix) {
    if (/^win/.test(process.platform)) {
        const path = require('path')
        return path.join('\\\\?\\pipe', process.cwd(), `server-${socketPathSuffix}`)
    } else {
        return `/tmp/server-${socketPathSuffix}.sock`
    }
}

function getRandomString () {
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
                context.warn(`WARNING: Attempting to listen on socket ${getSocketPath(server._socketPathSuffix)}, but it is already in use. This is likely as a result of a previous invocation error or timeout. Check the logs for the invocation(s) immediately prior to this for root cause, and consider increasing the timeout and/or cpu/memory allocation if this is purely as a result of a timeout. aws-serverless-express will restart the Node.js server listening on a new port and continue with this request.`)
                server._socketPathSuffix = getRandomString()
                // return server.close(() => startServer(server))
            } else {
                context.log('ERROR: server error')
                context.error(error)
            }
        })

    return server
}

const startServer = (server) => server.listen(getSocketPath(server._socketPathSuffix))


module.exports = (context, req) => {
    const server = createServer(context)
    
    startServer(server)


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
    // request.write('test')
    // request.end()

}
