import styled from '@emotion/styled'
import { theme } from 'styles'

const WIDTH = {
  75: '75%',
  100: '100%'
}

const getWidth = props => {
  const width = WIDTH[props.width]
  if (!width) {
    return WIDTH['100']
  }
  return width
}

export const Container = styled.div`
  color: white;
  font-family: 'Montserrat', 'sans-serif';
  padding: 0;
  margin: 0 auto;
  background-color: ${theme.colors.background};
  width: ${props => getWidth(props)};
  height: 100vh;
`
