const server = require('next/dist/server/lib/start-server.js');
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

server.default({}, PORT).then(async app=>{// tslint:disable-next-line
    console.log(`started server on http://localhost:${PORT}`);await app.prepare()})
