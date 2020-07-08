// const http = require("http")
// const isType = require('type-is')
//
// function azureFunctionHandler (server) {
//
//     console.log('ser', server())
//     server()
//
//     const getContentType = (params) => {
//         return params.contentTypeHeader ? params.contentTypeHeader.split(';')[0] : ''
//     }
//
//     const isContentTypeBinaryMimeType = (params) => {
//         return params.binaryMimeTypes.length > 0 && !!isType.is(params.contentType, params.binaryMimeTypes)
//     }
//
//     return (context, req) => {
//
//         let url = new URL(req.url)
//         let pathname = url.pathname
//
//         const requestOptions = {
//             path: pathname,
//             method: req.method,
//             headers: Object.assign({}, req.headers),
//             socketPath
//         }
//
//         const request = http.request(requestOptions, (res) => {
//             const buffer = []
//
//             res.on('data', (chunk) => buffer.push(chunk))
//
//             res.on("end", () => {
//                 const bodyBuffer = Buffer.concat(buffer)
//                 const status = res.statusCode
//                 const headers = res.headers
//
//                 if (headers['transfer-encoding'] === 'chunked') {
//                     delete headers['transfer-encoding']
//                 }
//
//                 const contentType = getContentType({contentTypeHeader: headers['content-type']})
//                 const isBase64Encoded = isContentTypeBinaryMimeType({contentType, binaryMimeTypes: ['*/*']})
//                 const body = bodyBuffer
//
//                 context.res = {status, body, headers, isBase64Encoded}
//                 context.done();
//             });
//         }).on("error", (error) => {
//             context.log('error');
//             context.res = {
//                 status: 500,
//                 body: error
//             };
//             context.done();
//         });
//         request.end()
//     }
// }
//
// exports.default = azureFunctionHandler;
//
// module.exports = exports.default;
