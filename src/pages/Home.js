import React from 'react'

import ContainerCountry from "../components/ContainerCountry"
import Search from "../components/Search"
import Select from "../components/Select"
import { Container } from '../layout/Container'
import Main from '../layout/Main'
const Home = () => {
  const style = {
    "display":"flex",
    "justifyContent": "space-between",
    "alingItems" : "center",
    "marginBottom" : "1.5rem"
    
  }
  return (
    <>
      <Main>
          <Container style = {style}> 
          <Search/>
          <Select/>
          </Container>
          <ContainerCountry/>
      </Main>
    </>
  )
}

export default Home
