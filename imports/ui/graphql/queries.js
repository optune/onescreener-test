import gql from 'graphql-tag'

export const PAGE = gql`
  query fetchPage {
    page {
      content {
        title
        type
        text
      }
      logo {
        image {
          url
        }
        size
        text
        color
        font
      }
    }
  }
`
