import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from '@emotion/react'
import { theme } from 'styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
