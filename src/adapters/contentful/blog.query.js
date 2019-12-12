const gql = require('graphql-tag')

const blog = gql`
query getBlogPage {
  blogPostCollection {
    items {
      sys {
        id
      }
      date
      title
      headlights
      body
      image {
        file {
            url
        }
        url,
        altText
      }
    }
  }
}`

module.exports = blog
