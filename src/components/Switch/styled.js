import styled from "styled-components"
export const Moon = styled.svg`
  width: 16px;
  margin-right: 8px;
  filter: ${({theme}) => theme.icon ? "" : "invert(1)" };
 
`