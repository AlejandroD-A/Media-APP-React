import styled from '@emotion/styled'

export const CardList = styled.ul`
  /*  padding: 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
 */
  padding: 1rem;
  margin-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`
