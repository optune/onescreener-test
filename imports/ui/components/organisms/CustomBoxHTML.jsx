/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled from 'styled-components'

const BoxBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${({ colorPrimary }) => colorPrimary};
`

export const CustomBoxHTML = ({
  children,
  color,
  colorBackground,
  customHTML,
}) => {
  return <BoxBackground dangerouslySetInnerHTML={{ __html: customHTML }} />
}
