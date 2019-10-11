const gql = require('graphql-tag')

const GET_GLOBAL_LABELS = gql`
query getGlobalLabels {
  labelGroupCollection(limit: 1, where: {id: "global"}) {
    items {
      name
      labels
    }
  }
}`

module.exports = GET_GLOBAL_LABELS
