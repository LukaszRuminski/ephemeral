process.env.AZURE_FUNCTION = true
process.env.NODE_ENV = "production"

const azureFunctionHandler = require('./handler')
const server = require('./code/ephemeral')

module.exports = azureFunctionHandler(server)
