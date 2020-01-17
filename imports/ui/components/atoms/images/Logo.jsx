/* eslint-disable react/prop-types */

import React from 'react'
import styled, { css } from 'styled-components'

// Packages
import { Textfit } from 'react-textfit'
// import FontPicker from 'font-picker-react'

// const LogoSizeLandscape = {
//   XS: '8.333%',
//   S: '16.666%',
//   M: '33.333%',
//   L: '50%',
//   XL: '66.666%',
// }

const LogoSizeLandscape = {
  XS: '8.333%',
  S: '16.666%',
  M: '33.333%',
  L: '50%',
  XL: '66.666%',
}

const LogoSizePortrait = {
  XS: '16.666%',
  S: '33.333%',
  M: '50%',
  L: '66.666%',
  XL: 'calc(100% - 2rem)',
}

// const LogoImage = styled.img`
//   display: flex;
//   object-fit: contain;
//   margin: 1rem;
//   max-width: unset;
//   max-height: unset;

//   @media screen and (orientation: portrait) {
//     ${({ orientation, size }) =>
//       orientation === 'LANDSCAPE'
//         ? css`
//             width: ${LogoSizePortrait[size]};
//           `
//         : css`
//             width: ${LogoSizePortrait[size]};
//           `}
//   }

//   @media screen and (orientation: landscape) {
//     ${({ orientation, size }) =>
//       orientation === 'LANDSCAPE'
//         ? css`
//             width: ${LogoSizeLandscape[size]};
//           `
//         : css`
//             height: ${LogoSizeLandscape[size]};
//           `}
//   }
// `

const StyledTextFit = styled(Textfit)`
  text-align: center;
  color: ${({ color }) => color};
  width: 100%;
`

const LogoImage = styled.h4`
  display: flex;
  margin: 1rem;
  max-width: unset;
  max-height: unset;

  @media screen and (orientation: landscape) {
    ${({ orientation, size }) =>
      orientation === 'LANDSCAPE'
        ? css`
            width: ${LogoSizeLandscape[size]};
          `
        : css`
            height: ${LogoSizeLandscape[size]};
          `}
  }
`

export const Logo = ({ text, size, color, font }) =>
  text ? (
    <StyledTextFit
      color={color}
      className="apply-font"
      mode="single"
      forceSingleModeWidth={true}
    >
      {text}
    </StyledTextFit>
  ) : // <LogoImage className="apply-font" size={size} color={color}>
  //   {' '}
  //   {text}{' '}
  // </LogoImage>
  // <LogoImage src={image.url} size={size} orientation={image.orientation} />
  null
