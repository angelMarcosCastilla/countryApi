import React from 'react'
import { Container } from './Container'

const Header = ({children}) => {
  return (
    <header>
      <Container>
        {children}
      </Container>
    </header>
  )
}

export default Header
