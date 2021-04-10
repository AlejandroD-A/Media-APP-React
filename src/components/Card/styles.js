import styled from '@emotion/styled'
import { theme } from 'styles'
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', monospace;
  color: white;
`

export const CardHeader = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  z-index: 10;

  span {
    background: rgba(0, 0, 0, 0.7);
    margin-bottom: -2rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 1rem 1rem;
    font-weight: 200;
  }
  small {
    color: #fff;
  }
`

export const CardBody = styled.div`
  border-right: 1px solid rgb(253, 255, 182, 0.6);
  border-bottom: 1px solid rgb(253, 255, 182, 0.6);

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: all 4s ease-in infinite;
  cursor: pointer;
  :hover {
    border-right: 2px solid rgb(253, 255, 182, 1);
    border-bottom: 2px solid rgb(253, 255, 182, 1);
  }
`

export const CardContent = styled.div`
  background: ${theme.colors.background};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 300;
`
export const ImgWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`

export const CardTitle = styled.div`
  position: absolute;
  margin-top: -2rem;
  margin-left: -1rem;
  background: white;
  color: black;
  padding: 0.5rem;
`

export const CardStatusList = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
  }
  ul > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
  .icon {
    font-size: 1.2rem;
    margin-right: 3px;
    transition: font-size 0.2s, color 2s;
  }

  .icon:hover {
    color: var(--warning-color);
    font-size: 1.5rem;
  }
`
export const ContentShort = styled.div`
  font-size: 1rem;
  font-weight: 200;
  margin-top: 1rem;
  padding: 2rem;
`
export const TagList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
  max-height: 2rem;
  li {
    margin-bottom: 0.5rem;
    background: ${theme.colors.warning};
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    padding: 0 0.5rem;
  }

  li:hover {
    background: rgb(253, 255, 182, 0.4);
  }
`
