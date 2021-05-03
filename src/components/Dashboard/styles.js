import styled from '@emotion/styled'

export const DashboardSection = styled.section`
  .buttonCreate {
    background: none;
    border: none;
  }
  .create {
    color: white;
    font-size: 3rem;
  }
`

export const SelectorButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  border: none;
  transition: all 0.5s ease-out;
  ${props => {
    if (props.selected) {
      return ` 
      color: var(--dark-back-main-color);
      background: white;
      font-size:1rem;
      padding: 0 2rem;
  
    `
    } else {
      return `
      background:var(--dark-back-main-color);
      color: white;
      padding: 0 1rem;  
      `
    }
  }}

  :focus {
    outline: 0;
  }
`
