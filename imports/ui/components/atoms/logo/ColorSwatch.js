import React, { useState } from 'react'
import styled from 'styled-components'

const StyledColorSwatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`
const StyledColor = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: rgba(
    ${({ chosenColor }) => chosenColor.r},
    ${({ chosenColor }) => chosenColor.g},
    ${({ chosenColor }) => chosenColor.b},
    ${({ chosenColor }) => chosenColor.a}
  );
`
export const ColorSwatch = ({ ...other }) => {
  return (
    <StyledColorSwatch {...other}>
      <StyledColor {...other} />
    </StyledColorSwatch>
  )
}
