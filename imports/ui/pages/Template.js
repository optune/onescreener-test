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

const Templates = [
  {
    templateId: '1111',
    title: 'Template for Location Manager',
    image:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,w_1500/v1557913264/optune/app/solutions/solution_location_manager.jpg',
  },
  {
    templateId: '2222',
    title: 'Template for Artist',
    image:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,w_1500/v1557913263/optune/app/solutions/solution_artist.jpg',
  },
  {
    templateId: '3333',
    title: 'Template for Booking Agent',
    image:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,w_1500/v1557913263/optune/app/solutions/solution_booking_agent.jpg',
  },
  {
    templateId: '4444',
    title: 'Template for Promoter',
    image:
      'https://res.cloudinary.com/optune-me/image/upload/c_scale,w_1500/v1557913266/optune/app/solutions/solution_promoter.jpg',
  },
]

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

      <Row>{/* TODO: add template carousel */}</Row>

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
