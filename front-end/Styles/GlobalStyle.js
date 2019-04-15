import {
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700');
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin::400,600,700');


  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  h1 { font: ${({ theme }) => theme.fontDesktopH1}; }
  h2 { font: ${({ theme }) => theme.fontDesktopH2}; }
  h3 { font: ${({ theme }) => theme.fontDesktopH3}; }
  h4 { font: ${({ theme }) => theme.fontDesktopIngress}; }
  
  @media screen and (max-width: 420px) {
    h1 { font: ${({ theme }) => theme.fontMobileH1}; }
  }
`;

export default GlobalStyle;