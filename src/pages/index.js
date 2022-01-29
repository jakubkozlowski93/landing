import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Footer from './../components/organisms/Footer/Footer'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Bar from './../components/atoms/Bar/Bar'
import Menu from './../components/organisms/Menu/Menu'

const Container = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 80px 50px 40px 50px;
  overflow-x: hidden;
  /* display: grid;
  grid-template-rows: 50px 1fr 50px; */
`

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
        {isOpen ? null : <Menu />}
        {isOpen ? (
          <>
            <HeroSection />
            <Bar text="usługi" />
          </>
        ) : (
          <Footer />
        )}
      </Container>
    </>
  )
}

export default Home
