const createServer = require('next/dist/server/lib/start-server.js').default;
const port = process.env.port || process.env.PORT || 80

const server = createServer({dir: './code'}, port).then(async app => {
    console.log(`started server on http://localhost:${port}`)
    await app.prepare()
})

module.exports = { server, hostname: 'localhost', port}
