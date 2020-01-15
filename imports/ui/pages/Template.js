/* eslint-disable react/prop-types */

// React
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

// Atoms
import { BigText } from '../components/atoms/text/BigText'
import { MediumText } from '../components/atoms/text/MediumText'
import { SubTitle } from '../components/atoms/text/SubTitle'

import { Page } from '../components/atoms/layout/Page'
import { Row } from '../components/atoms/layout/Row'

// Molecules
import { ButtonBar } from '../components/molecules/forms/ButtonBar'

// GraphQL
import { CHANGE_TEMPLATE } from '../graphql/mutations'
import { PAGE } from '../graphql/queries'

const Template = ({ page }) => {
  const { t } = useTranslation()

  const [templateId, setTemplateId] = useState(page?.templateId)

  const dirty = templateId !== page?.templateId

  return (
    <Page>
      <SubTitle>{t('template.subtitle')}</SubTitle>

      <Row>
        <BigText>{t('template.title')}</BigText>
      </Row>

      <Row>
        {/* TODO: add template carousel */}
      </Row>

      <ButtonBar
        dirty={dirty}
        mutation={CHANGE_TEMPLATE}
        navLink="/content"
        navText={t('template.navigate.edit')}
        onSave={save =>
          save({
            templateId,
          })
        }
        refetchQuery={PAGE}
        saveText={t('template.save')}
      />
    </Page>
  )
}

export default Template
