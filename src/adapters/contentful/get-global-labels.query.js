const gql = require('graphql-tag')

const GET_GLOBAL_LABELS = gql`
query getGlobalLabels {
  labelsCollection(limit: 1) {
    items {
      name
      labels
    }
  }
}`

module.exports = GET_GLOBAL_LABELS
