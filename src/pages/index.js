import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Footer from './../components/organisms/Footer/Footer'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Menu from './../components/organisms/Menu/Menu'
import Services from '../components/organisms/Services/Services'

const Container = styled.div`
  width: 100%;
  padding: 80px 50px 40px 50px;
  overflow-x: hidden;
`

const Wrapper = styled.div``

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Container>
        {isOpen ? (
          <Wrapper>
            <HeroSection />
            <Services />
          </Wrapper>
        ) : (
          <>
            <Menu />
            <Footer />
          </>
        )}
      </Container>
    </>
  )
}

export default Home
