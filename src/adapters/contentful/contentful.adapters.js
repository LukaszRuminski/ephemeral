const client = require('./contentful.connection')

// Queries
const getGlobalLabelsQuery = require('./get-global-labels.query')
const getTeamMembersQuery = require('./team.query')
const getPortfolioItemsQuery = require('./portfolio.query')
const getBlogPostsQuery = require('./blog.query')
const getBlogPostQuery = require('./article.query')

const getGlobalLabels = async () => {
    return client.query({ query: getGlobalLabelsQuery })
}

const getTeamMembers = async () => (
    client.query({ query: getTeamMembersQuery })
)

const getPortfolioItems = async () => (
    client.query({ query: getPortfolioItemsQuery })
)

const getBlogPosts = async () => (
    client.query({ query: getBlogPostsQuery })
)

const getBlogPost = async id => (
    client.query({ query: getBlogPostQuery, variables: { articleId: id } })
)

module.exports = {
    getGlobalLabels,
    getTeamMembers,
    getPortfolioItems,
    getBlogPosts,
    getBlogPost
}
