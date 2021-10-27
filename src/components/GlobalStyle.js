import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","SF Pro","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
    background: var(--theme-background-color);
    color: var(--system-primary);
  }
  input {
    border: none;
    outline: none;
  }
  ul {
    list-style: none;
  }
  button {
    outline: none;
    border: none;
  }
  textarea {
    font-size: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle