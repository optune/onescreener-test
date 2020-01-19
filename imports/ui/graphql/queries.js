import gql from 'graphql-tag'

export const PAGE = gql`
  query fetchPage {
    page {
      content {
        title
        type
        text
        customHTML
      }
      logo {
        image {
          url
        }
        size
        text
        color
        font
        fontUrl
      }
    }
  }
`
