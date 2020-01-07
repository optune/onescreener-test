/* eslint-disable react/prop-types */
import React from 'react'
import styled, { keyframes } from 'styled-components'

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  color: ${({ colorPrimary }) => colorPrimary};
  transition: color 0.3s ease-out;

  & h1,
  h2,
  h3,
  h4,
  h5,
  a,
  li,
  p,
  span {
    font-size: 1em;
    color: ${({ colorPrimary }) => colorPrimary};
    white-space: nowrap;
    transition: color 0.3s ease-out;
    line-height: 1.4;
    margin: 0 0 0.1em;
    padding: 0;
  }

  & .separator-line {
    background: ${({ colorPrimary }) => colorPrimary};
    height: 0.1em;
    min-height: 1px;
    margin 1em 0;
    padding: 0;
    border: none;
  }

  & a:hover {
    color: ${({ colorPrimary }) => colorPrimary};
  }

  & h1 {
    font-size: 1.8em;
    font-weight: bold;
    margin: 1em 0;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & h3 {
    font-size: 1.2em;
  }

  & h4 {
    font-size: 1em;
  }

  & h5 {
    font-size: 0.8em;
  }
`

const TextContent = styled.div`
  padding: 1em 2em;
  background-color: ${({ colorBackground }) =>
    colorBackground || 'transparent'};
  width: 100%;
`

export const TextBox = ({ children, color, colorBackground }) => (
  <TextBackground>
    <Text colorPrimary={color}>
      <TextContent colorBackground={colorBackground}>{children}</TextContent>
    </Text>
  </TextBackground>
)
