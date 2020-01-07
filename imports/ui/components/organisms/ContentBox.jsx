/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from './TextBox'

import { MediaSmall } from '../../styles/media'

const DesktopGrid = {
  RowSize: 6,
  ColumnSize: 6,
  Unit: 16.666, // = 100 : 6
}

const round = a => a.toFixed(2)

const getGridArea = ({
  startRow,
  startColumn,
  endRow,
  endColumn,
  rowSpan,
  columnSpan,
}) => {
  const { ColumnSize, RowSize, Unit } = DesktopGrid
  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = ColumnSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const isBottom = RowSize - endRow < startRow - 1
  const positionV = isBottom ? 'bottom' : 'top'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : ColumnSize - endColumn
  const marginH = (marginHUnit * Unit).toFixed(3)

  const marginVUnit = isBottom ? RowSize - endRow : startRow - 1
  const marginV = (marginVUnit * Unit).toFixed(3)

  const width = round(columnSpan * Unit)
  const widthCorrection = round((columnSpan * 2) / ColumnSize)

  const height = round(rowSpan * Unit)
  const heightCorrection = round((rowSpan * 2) / RowSize)

  const area = `
    ${positionH}: ${marginH}vw;
    ${positionV}: ${marginV}vh;
    width: calc(${width}vw - ${widthCorrection}rem);
    height: calc(${height}vh - ${heightCorrection}rem);
  `

  return css`
    ${area}
  `
}

const ResponsiveContainer = styled.div`
  position: absolute;
  z-index: 3;

  ${({ area }) => getGridArea(area)}

  @media ${MediaSmall} {
    min-width: 33.333vw;
    min-height: 33.333vw;
  }
`

const getArea = ({ position, span }) => {
  const [startRowField, startColumnField] = position.split('/')
  const [rowSpanField, columnSpanField] = span.split('/')

  const startRow = parseInt(startRowField)
  const startColumn = parseInt(startColumnField)
  const rowSpan = parseInt(rowSpanField)
  const columnSpan = parseInt(columnSpanField)
  const endRow = startRow + parseInt(rowSpan) - 1
  const endColumn = startColumn + parseInt(columnSpan) - 1

  return { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan }
}

export const ContentBox = ({ content }) => {
  /*
   * Get content values
   */
  const {
    color = '#FFF',
    colorBackground = 'rgba(0,0,0,0.5)',
    position = '4/2',
    span = '2/4',
    text,
    type,
  } = content
  const colors = { color, colorBackground }
  const area = getArea({ position, span })

  /*
   * Set content component
   */

  let Content

  switch (type) {
    case 'TEXT':
      Content = <TextBox {...colors}>{text}</TextBox>
      break

    default:
      Content = null
  }

  return <ResponsiveContainer area={area}>{Content}</ResponsiveContainer>
}
