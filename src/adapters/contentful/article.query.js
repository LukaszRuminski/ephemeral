const gql = require('graphql-tag')

const article = gql`
query getPost($articleId: String!) {
  blogPost(id: $articleId) {
    date
    title
    body
    author
    image {
      file {
        url
      }
      url,
      altText
    }
  }
}`

module.exports = article
