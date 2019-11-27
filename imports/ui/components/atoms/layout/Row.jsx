import styled from 'styled-components'

export const Row = styled.div`
  position: relative;
  width: 50%;
  display: 'flex';
  justify-content: 'center';
  align-items: center;
  flex-flow: ${({ flow }) => flow || 'column'};
  padding: 1rem 1.5rem;
`