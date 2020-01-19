/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// GraphQL
import { PAGE } from '../../graphql/queries.js'
import { withQuery } from '../../mixins/withQuery'

import { Page } from '../../components/templates/Page'

const PreviewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`

export default withQuery(PAGE)(({ page }) => {
  return (
    <PreviewContainer>
      <Page page={page} />
    </PreviewContainer>
  )
})
