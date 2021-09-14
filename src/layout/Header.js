import React from 'react'
import { Container } from './Container'
import Switch from "../components/Switch"
import "./header.css"

const Header = ({children}) => {
  return (
    <header className = "header">
      <Container className = "flex">
        <h1 className = "title">
          Where in the word ?
        </h1>
        <Switch/>
      </Container>
    </header>
  )
}

export default Header
