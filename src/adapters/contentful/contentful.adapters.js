const client = require('./contentful.connection')

// Queries
const getGlobalLabelsQuery = require('./get-global-labels.query')

const getGlobalLabels = async () => {
    return client.query({ query: getGlobalLabelsQuery })
}

module.exports = {
    getGlobalLabels
}
