import React from 'react'
import styled from 'styled-components'

// Package ColorPicker
import { SketchPicker } from 'react-color'

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

export const ColorPicker = ({ color, onClose, onChange }) => {
  return (
    <Popover>
      <Cover onClick={onClose} />
      <SketchPicker
        color={color}
        onChange={color => {
          onChange(color.rgb)
        }}
      />
    </Popover>
  )
}
