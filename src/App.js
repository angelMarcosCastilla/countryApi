import { CountryProvider } from "./context/provider/CountryProvider";
import Home from "./pages/Home";

function App() {

  return (
    <CountryProvider>
      <Home></Home>
    </CountryProvider>
  );
}



export default App;