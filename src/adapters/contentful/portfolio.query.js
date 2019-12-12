const gql = require('graphql-tag')

const portfolio = gql`
query getPortfolioPage {
  portfolioItemCollection {
    items {
      sys {
        id
      }
      title
      url
      newimage {
        file {
          url
        }
        altText
      }
    }
  }
}`

module.exports = portfolio
