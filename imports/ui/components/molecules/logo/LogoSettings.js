import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

// Atoms
import { ColorSwatch } from '../../atoms/logo/ColorSwatch'
import { ColorPicker } from '../../atoms/logo/ColorPicker'
import { FontPicker } from '../../atoms/logo/FontPicker'
import { SubText } from '../../atoms/text/SubText'
import { SubTitle } from '../../atoms/text/SubTitle'

// Styles
const SettingsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const ColorWrap = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FontWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledColorPicker = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 110px);
`

export const LogoSettings = ({
  chosenColor,
  displayColorPicker,
  onSwatchClick,
  onColorClose,
  onColorChange,
  activeFontFamily,
  onFontChange,
  limit,
}) => {
  return (
    <SettingsWrap>
      <ColorWrap>
        <SubText>Choose color:</SubText>
        <ColorSwatch chosenColor={chosenColor} onClick={onSwatchClick} />
        {displayColorPicker ? (
          <StyledColorPicker>
            <ColorPicker
              color={chosenColor}
              onClose={onColorClose}
              onChange={onColorChange}
            />
          </StyledColorPicker>
        ) : null}
      </ColorWrap>
      <FontWrap>
        <SubText>Choose font:</SubText>
        <FontPicker
          activeFontFamily={activeFontFamily}
          onFontChange={onFontChange}
          limit={limit}
        />
      </FontWrap>
    </SettingsWrap>
  )
}
