import styled from '@emotion/styled'
import { bps, theme } from 'styles'

export const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  ${bps.mobile} {
    width: 100%;
    justify-content: space-around;
  }
`

export const Logo = styled.div`
  font-family: 'Inconsolata', monospace;
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.danger};
  padding: 1rem;
  margin: 1rem;

  & a {
    text-decoration: none;
    color: ${theme.colors.text};
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
  }
`
export const LogButtons = styled.div`
  a {
    text-decoration: none;
    color: #f1f1f1;
    margin-left: 1rem;
    transition: 0.6 color ease-in-out;
  }

  a:hover {
    color: var(--secondary-color);
  }
`

export const UserButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: var(--light-back-main-color);
    padding: 0.5rem;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--dark-back-color);
    text-decoration: none;
  }

  div {
    opacity: 0;
    margin-top: 2.2rem;
    border: 0.3px solid white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    width: 8rem;
    padding: 1rem;
    background: var(--dark-back-color);
    text-align: center;

    transition: 0.3s opacity ease-in-out;
  }

  div > button {
    font-family: 'Montserrat';
    font-weight: bold;
    color: white;
    border: none;
    background: none;
  }

  button:hover {
    color: var(--danger-color);
  }

  :hover div {
    opacity: 1;
  }
`
