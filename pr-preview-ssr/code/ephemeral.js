const createServer = require('next/dist/server/lib/start-server.js').default
const next = require("next")
const http = require("http")

// const app = next({dir: './', customServer: false})
// const handler = app.getRequestHandler()

// const server = () => {
//
//     const server = http.createServer(() => handler(context.req, context.res));
//     new Promise((resolve, reject) => {
//         server.on('error', reject);
//         server.on('listening', () => resolve());
//         server.listen(3000)
//     });
//
//     return  Promise.resolve(server)
// }

createServer({}, 3000).then(async app => {
    console.log(`started server on http://localhost:${3000}`)
    await app.prepare()
})

// const server = () => {
//     const server = createServer({dir: './pr-preview-ssr/code'}).then( async app => {
//         const prepare = await app.prepare()
//
//         console.log('app', app.router)
//         console.log('app', Promise.resolve(prepare))
//     })
//
//     return  Promise.resolve(server)
// }

// exports.server = server
