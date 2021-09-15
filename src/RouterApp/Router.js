import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CountryProvider } from "../context/provider/CountryProvider";
import Header from "../layout/Header";
import Details from "../pages/Details";
import Home from "../pages/Home"
import { GlobalStyled } from "../components/GlobalStyle";
import {themes } from "../config/themes"
import { ThemeProvider } from "styled-components";
import ThemeAppProvider from "../context/ThemesAppContext";
import { useState } from "react";

const RouterApp = () => {
  
  const [theme, setTheme] =  useState("ligth")

  const HandleToggleTheme = () => {
    theme === "dark" ? setTheme("ligth") : setTheme("dark") 
  }

  return (
    <div>
      <Router>
        <ThemeProvider theme = {themes[theme]}>
          <GlobalStyled/>
            <Header HandleToggleTheme = {HandleToggleTheme} />
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
