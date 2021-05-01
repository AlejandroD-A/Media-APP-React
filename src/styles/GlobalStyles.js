import { Global, css } from '@emotion/react'
import { theme } from './index'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;700&display=swap');

      :root {
        box-sizing: border-box;
        font-size: 16px;
        --danger-color: #ffa5aa;
        --primary-color: #caffbf;
        --secondary-color: #bdb2ff;
        --warning-color: #fdffb6;
        --light-back-color: #fffffc;

        --light-back-main-color: #f1f1f1;
        --dark-back-color: #252525;
        --dark-back-main-color: #1e1e1f;
      }

      html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      ul,
      li,
      h1,
      h2,
      h3,
      p,
      button {
        margin: 0;
        padding: 0;
      }
      button {
        cursor: pointer;
      }

      ul {
        list-style: none;
      }
      body {
        margin: 0;
        padding: 0;
      }

      main {
        min-height: 100%;
        margin: 0 auto;

        padding-top: 1rem;
        background-color: ${theme.colors.backgroundMain};
      }

      @media (max-width: 800px) {
        :root {
          font-size: 10px;
        }
      }
    `}
  />
)
