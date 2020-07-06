const createServer = require('next/dist/server/lib/start-server.js').default;
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

createServer({}, PORT).then(async app => {
    console.log(`started server on http://localhost:${PORT}`)
    await app.prepare()
})

