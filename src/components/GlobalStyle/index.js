import { createGlobalStyle } from "styled-components";
 export  const GlobalStyled = createGlobalStyle`
 
  body{
    margin:0;
    font-family: 'Heebo', sans-serif;
    background-color: ${({theme}) => theme.color.primary};
    color :  ${({theme}) => theme.text.color}
  }

  img {
    max-width: 100%;
  }

  a{
    text-decoration: nones;
  }
  `
