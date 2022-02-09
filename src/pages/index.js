import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import SocialIcons from './../components/molecules/SocialIcons/SocialIcons'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Menu from './../components/organisms/Menu/Menu'
import Services from '../components/organisms/Services/Services'
import Footer from './../components/organisms/Footer/Footer'
import { motion } from 'framer-motion'

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

  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Container>
        {isOpen ? (
          <Wrapper>
            <HeroSection />
            <Services />
            <Footer />
          </Wrapper>
        ) : (
          <>
            <Menu />
            <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}>
              <SocialIcons />
            </motion.div>
          </>
        )}
      </Container>
    </>
  )
}

export default Home
