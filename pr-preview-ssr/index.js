process.env.AZURE_FUNCTION = true
process.env.NODE_ENV = "production"

const {createServer, createRequest, startServer} = require('./handler')

module.exports = (context, req) => {
    const server = createServer(context)
    
    if(server._isListening){
        return server
    } else {
        startServer(server)
    }
    
    createRequest(context, req, server)

}
