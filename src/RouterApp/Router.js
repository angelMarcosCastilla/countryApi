import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  ThemeProvider  from "../context/ThemeContext";
import { CountryProvider } from "../context/provider/CountryProvider";
import Header from "../layout/Header";
import Details from "../pages/Details";
import Home from "../pages/Home"

const RouterApp = () => {
  return (
    <div>
      <Router>
        <ThemeProvider>
          <Header/>
        <Switch>
          <CountryProvider>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/details/:name" component = {Details}/>
          </CountryProvider>
        </Switch>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default RouterApp
