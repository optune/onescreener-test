import styled from 'styled-components'
import React, { Fragment } from 'react'

import { ColorLightGrey } from '../../../styles/color'

const StyledPreviewText = styled.h2`
  color: rgba(
    ${({ chosenColor }) => chosenColor.r},
    ${({ chosenColor }) => chosenColor.g},
    ${({ chosenColor }) => chosenColor.b},
    ${({ chosenColor }) => chosenColor.a}
  );
  background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      #ccc 10px,
      #ccc 20px
    ),
    linear-gradient(to bottom, #eee, #999);
  padding: 1rem;
  text-align: center;
  min-height: 28px;
  border-radius: 0.2rem;
  border: 1px solid ${ColorLightGrey};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.05);
`

export const PreviewText = ({ children, ...other }) => (
  <StyledPreviewText className="apply-font" {...other}>
    {children}
  </StyledPreviewText>
)
