const createServer = require('next/dist/server/lib/start-server.js');
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

createServer.default({}, PORT).then(async app => {
    console.log(`started server on http://localhost:${PORT}`)
    await app.prepare()
})

