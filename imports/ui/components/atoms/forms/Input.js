import styled from 'styled-components'
import { ColorMonza, ColorStormGray, ColorLightGrey } from '../../../styles/color'

export const Input = styled.input`
  font-size: ${({ small }) => (small ? 1.2 : 1.5)}rem;
  width: 100%;
  margin: ${({ margin, small }) => margin || (small && 0.5) || 1}rem 0;
  padding: ${({ small }) => (small ? '0.9rem 1rem' : '1rem 1.5rem')};
  border-radius: 0.2rem;
  border: 1px solid ${ColorLightGrey};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  color: ${({ error, empty }) =>
    (error && ColorMonza) || (empty && ColorStormGray) || ColorStormGray};

  :focus {
    outline-style: none;
  }
`
