/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { LogoBox } from '../organisms/LogoBox'
import { ContentBox } from '../organisms/ContentBox'

import GlobalStyle from '../../styles/global'

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ color }) => color};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`

const BacklinkUrl =
  'https://res.cloudinary.com/optune-me/image/upload/b_rgb:808080,bo_10px_solid_rgb:808080,e_blackwhite,q_auto:good/v1558014130/onescreener-v2/app/logo-onescreener.png'

const BackLink = styled.a`
  position: fixed;
  background-image: url(${BacklinkUrl});
  background-size: contain;
  background-color: #808080;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.3;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
  color: #ffffff;

  & h1 {
    color: #808080;
    font-size: 5px;
    opacity: 0.1;
  }
`

export const Page = ({ page }) => {
  let PageComponent = null

  if (page) {
    const { logo, content } = page

    PageComponent = (
      <Fragment>
        <GlobalStyle />
        <PageContainer
          image="http://res.cloudinary.com/optune-me/image/upload/v1565795382/onescreener-v2/prod/ashley-afterhour-1/csm_DJ_Snake_lacht_augen_sichtbar_f333cb1d2e_yztfsw.jpg"
          color="#FFF"
        >
          {/* Back Link to onescreener.com */}
          <BackLink
            href="https://www.onescreener.com"
            target="_blank"
            title="created with onescreener.com"
          >
            <h1>created by onescreener.com</h1>
          </BackLink>

          {/* Logo */}
          {logo && <LogoBox logo={logo} />}

          {/* Content */}
          <ContentBox content={content} />
        </PageContainer>
      </Fragment>
    )
  }

  return PageComponent
}
