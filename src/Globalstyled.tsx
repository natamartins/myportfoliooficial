import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  :focus {
    outline: none;
}
}
body{
  background-color: #fffdfd;
  font-family: 'IBM Plex Mono', monospace;
}
h1, h2, p, a{
  color: #222222;
  text-decoration: none;
}
`;
export default GlobalStyles;