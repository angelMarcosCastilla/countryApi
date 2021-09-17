import React from 'react'

import ContainerCountry from "../components/ContainerCountry"
import Search from "../components/Search"
import Select from "../components/Select"
import { Container } from '../layout/Container'
import Main from '../layout/Main'

import "./home.css"

const Home = () => {
 
  return (
    <>
      <Main>
          <Container className = "flex"> 
          <Search/>
          <Select/>
          </Container>
          <ContainerCountry/>
      </Main>
    </>
  )
}

export default Home
