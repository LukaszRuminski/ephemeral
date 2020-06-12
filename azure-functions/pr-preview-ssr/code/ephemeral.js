const next = require('next')
const path = require('path')
const express = require('express')
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const dir = dev ? './src' : path.resolve(__dirname)
const app = next({ dev, dir })
const handle = app.getRequestHandler()

function createServer() {
    const server = express()
    
    server.use('/sitemap.xml', express.static(path.join(__dirname, 'src', 'public', 'static', 'sitemap.xml')))
    server.use('/favicon.ico', express.static(path.join(__dirname, 'src', 'public', 'static', 'images', 'favicon.ico')))
    server.use('/robots.txt', express.static(path.join(__dirname, 'config', 'robots', 'robots-preview.txt')))
    server.use('/static', express.static(path.join(__dirname, 'src', 'public', 'static')))
    server.use('/public', express.static(path.join(__dirname, 'src', 'public')))
    
    server.all("*", (req, res) => {
        return handle(req, res)
    })
    
    return server
}

const server = createServer()

const preparePaths = app.prepare().then(() => {
    console.info("App prepared")
})

module.exports = { appServer: server, preparePaths }
