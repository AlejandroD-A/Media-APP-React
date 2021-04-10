import styled from '@emotion/styled'
import { bps } from 'styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  padding-top: 2rem;

  ${bps.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`
