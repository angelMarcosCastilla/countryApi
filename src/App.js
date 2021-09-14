import RouterApp from "./RouterApp/Router";
import { createGlobalStyle } from "styled-components";
function App() {
  const GlobalStyled = createGlobalStyle`
  body{
    margin:0;
    font-family: 'Heebo', sans-serif;
  }
  ` 
  return (
    <>
    <GlobalStyled/>
    <RouterApp/>
    </>
  );
}



export default App;