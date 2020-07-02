process.env.AZURE_FUNCTION = "true"
process.env.NODE_ENV = "production"

const azureFunctionHandler = require('azure-aws-serverless-express')
const { appServer } = require('./code/ephemeral')

module.exports = azureFunctionHandler(appServer)

