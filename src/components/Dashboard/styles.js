import styled from '@emotion/styled'

export const CardSection = styled.div``

export const Menu = styled.nav`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .selected {
    font-size: 2rem;
    border-bottom: solid var(--secondary-color) 2px;
  }
`

export const MenuItem = styled.button`
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;

  margin-left: 2rem;
  padding-bottom: 0.1rem;

  color: white;
  font-size: 1rem;
  transition: 0.5s all ease-in-out;
  :hover {
    border-bottom: solid var(--secondary-color) 2px;
  }
`
