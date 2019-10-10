const fetch = require('node-fetch')
const ApolloClient = require('apollo-client').ApolloClient
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache
const HttpLink = require('apollo-link-http').HttpLink

const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENVIRONMENT}`

const cache = new InMemoryCache()

const link = new HttpLink({
    uri,
    fetch,
    headers: {
        Authorization: 'Bearer ' + process.env.CF_DELIVERY_ACCESS_TOKEN
    }
})

const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all'
        }
    }
})

module.exports = client
