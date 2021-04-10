import styled from '@emotion/styled'
import { theme } from 'styles'
import { css, keyframes } from '@emotion/react'

import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineBulb } from 'react-icons/ai'

const move = keyframes`
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(30deg);
  }`

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  padding-top: 1rem;
`

export const List = styled.ul`
  display: flex;
  align-items: baseline;
`

export const ItemList = styled.li`
  list-style: none;
  padding: 0 1rem 0 1rem;
`

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 0.6rem;
  text-decoration: none;
  color: ${theme.colors.text};
  cursor: pointer;
  &:hover {
    animation: ${move} 1s infinite;
  }
`
const icon = css`
  font-size: 2rem;
  transition: transform 0.2s ease;
  animation-fill-mode: forwards;
`

export const HeartIcon = styled(AiOutlineHeart)`
  ${icon}
  color: var(--primary-color);
`
export const ShortIcon = styled(AiOutlineBulb)`
  ${icon}
  color: var(--warning-color);
`
export const PostIcon = styled(AiOutlineBulb)`
  ${icon}
  color: var(--secondary-color);
`
