import React from 'react'
import styled from 'styled-components'

// Package FontPicker
import { default as PackageFontPicker } from 'font-picker-react'

export const FontPicker = ({ activeFontFamily, onFontChange, limit }) => {
  let fontApiKey = 'AIzaSyC_d6J0k3jpYkvZl43Yyb3dugUNbfms4HU'

  return (
    <PackageFontPicker
      apiKey={fontApiKey}
      activeFontFamily={activeFontFamily}
      onChange={onFontChange}
      limit={limit}
    />
  )
}
