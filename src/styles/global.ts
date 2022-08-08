import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :focus {
    outline: 0;
  }
  
  body {
    background: ${(props) => props.theme['white-bg']};
    color: ${(props) => props.theme['base-subtitle']};
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }
`
