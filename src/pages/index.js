import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import SocialIcons from './../components/molecules/SocialIcons/SocialIcons'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Menu from './../components/organisms/Menu/Menu'
import Services from '../components/organisms/Services/Services'
import Footer from './../components/organisms/Footer/Footer'

const Container = styled.div`
  width: 100%;
  padding: 80px 0px 40px 0px;
  overflow-x: hidden;
`

const Wrapper = styled.div``

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const ScrollToTop = () => {
    window.addEventListener(
      'click',
      () => {
        window.scrollTo(0, 0)
      },
      true
    )
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
            <Footer scrollTop />
          </Wrapper>
        ) : (
          <>
            <Menu />
            <SocialIcons />
          </>
        )}
      </Container>
    </>
  )
}

export default Home
