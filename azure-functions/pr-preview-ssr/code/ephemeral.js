const createServer = require('next/dist/server/lib/start-server.js').default;
const server = async (port) => {
    const server = await createServer({dir: './code'}, port)

    return  Promise.resolve(server)
}

exports.server = server
