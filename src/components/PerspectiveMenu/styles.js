import styled from '@emotion/styled'

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuItem = styled.button`
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;

  margin-left: 2rem;
  padding-bottom: 0.1rem;

  color: white;
  font-size: 0.8rem;
  transition: 0.5s all ease-in-out;
  ${props => {
    if (props.selected) {
      return ` 
    font-size: 1.5rem;
   border-bottom: solid var(--secondary-color) 2px;`
    }
  }}
  :hover {
    border-bottom: solid var(--secondary-color) 2px;
  }

  :focus {
    outline: 0;
  }
`
