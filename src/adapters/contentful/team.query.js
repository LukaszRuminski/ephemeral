const gql = require('graphql-tag')

const team = gql`
query getTeamPage {
  teamMemberCollection {
    items {
      sys {
        id
      }
      firstName
      lastName
      description
      imageUrl
      imageAltText
    }
  }
}`

module.exports = team
