const next = require('next')
const path = require('path')
const express = require("express")
require('dotenv').config()

const { PORT } = process.env
const dev = process.env.NODE_ENV !== 'production'
const dir = dev ? './src' : path.resolve(__dirname)
const app = next({ dev, dir })
const handle = app.getRequestHandler()
const server = express()

const ssrServer = () => {
    app.prepare().then(() => {

        server.use('/sitemap.xml', express.static(path.join(__dirname, 'public', 'static', 'sitemap.xml')));
        server.use('/robots.txt', express.static(path.join(__dirname, 'config', 'robots', 'robots-preview.txt')));

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, (err) => {
            if (err) throw err
            console.info('> Ready on http://localhost:%s', PORT)
        })
    })
        .catch((ex) => {
            console.error(ex.stack)
            process.exit(1)
        })
}

const staticServer = () => {

    server.use(express.static('out'))
    server.use((req, res) => {
        res.redirect('/404.html')
    })

    server.listen(PORT, function(){
        console.info("Static server started at http://localhost:%s", PORT)
    })
}

let myArgs = process.argv.slice(2);

if (myArgs[0] === '--static'){
    staticServer()
}
else{
    ssrServer()
}
