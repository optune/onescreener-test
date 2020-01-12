/* eslint-disable react/prop-types */

// React
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

// Atoms
import { Input } from '../../components/atoms/forms/Input'
import { BigText } from '../../components/atoms/text/BigText'
import { MediumText } from '../../components/atoms/text/MediumText'
import { SubTitle } from '../../components/atoms/text/SubTitle'
import { PreviewText } from '../../components/atoms/text/PreviewText'
// import { ColorPicker } from '../../components/atoms/color/ColorPicker'
// import { ColorSwatch } from '../../components/atoms/color/ColorSwatch'

import { Page } from '../../components/atoms/layout/Page'
import { Row } from '../../components/atoms/layout/Row'

// Molecules
import { ButtonBar } from '../../components/molecules/forms/ButtonBar'
import { LogoSettings } from '../../components/molecules/logo/LogoSettings'

// GraphQL
import { CHANGE_LOGO } from '../../graphql/mutations'
import { PAGE } from '../../graphql/queries'

// Mixins
import { withQuery } from '../../mixins/withQuery'

const Logo = ({ page }) => {
  const { t } = useTranslation()
  const { logo } = page || {
    logo: { text: '', color: 'rgba(0, 0, 0, 1)', font: 'Open Sans' },
  }

  console.log(logo.text, logo.color, logo.font)

  const colors = logo.color.split(',').map(color => color.replace(/\D/g, ''))

  // const colors = [0, 0, 0, 1]

  const [text, setText] = useState(logo.text)
  const [activeFontFamily, setActiveFontFamily] = useState(logo.font)
  // const [activeFontFamily, setActiveFontFamily] = useState('Open Sans')
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [chosenColor, setChosenColor] = useState({
    r: colors[0],
    g: colors[1],
    b: colors[2],
    a: colors[3],
  })

  const dirty =
    text !== logo.text ||
    activeFontFamily !== logo.font ||
    colors[0] !== chosenColor.r ||
    colors[1] !== chosenColor.g ||
    colors[2] !== chosenColor.b ||
    colors[3] !== chosenColor.a

  return (
    <Page>
      <SubTitle>{t('page.subtitle')}</SubTitle>

      <Row>
        <BigText>{t('page.title')}</BigText>
      </Row>

      <Row>
        <MediumText>{t('page.logo.text.label')}</MediumText>
        <Input value={text} onChange={e => setText(e.target.value)} />
      </Row>

      <Row>
        <MediumText>Logo Settings</MediumText>
        <LogoSettings
          chosenColor={chosenColor}
          displayColorPicker={displayColorPicker}
          onSwatchClick={() => setDisplayColorPicker(!displayColorPicker)}
          onColorChange={color => setChosenColor(color)}
          onColorClose={() => setDisplayColorPicker(false)}
          activeFontFamily={activeFontFamily}
          onFontChange={nextFont => setActiveFontFamily(nextFont.family)}
          limit="80"
        />
      </Row>

      <Row>
        <MediumText>Preview</MediumText>
        <PreviewText className="apply-font" chosenColor={chosenColor}>
          {text}
        </PreviewText>
      </Row>

      <ButtonBar
        dirty={dirty}
        mutation={CHANGE_LOGO}
        navLink="/content"
        navText="Edit Content"
        onSave={save =>
          save({
            text,
            color: `rgba(${chosenColor.r}, ${chosenColor.g}, ${chosenColor.b}, ${chosenColor.a})`,
            font: activeFontFamily,
          })
        }
        refetchQuery={PAGE}
        saveText={t('page.logo.save')}
        previewText={t('page.preview.open')}
      />
    </Page>
  )
}

export default withQuery(PAGE)(Logo)
