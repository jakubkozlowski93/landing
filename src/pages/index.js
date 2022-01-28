import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import ClosedMenuIcon from './../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../assets/icons/OpenedMenuIcon.svg'
import { motion } from 'framer-motion'
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

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 50px 50px 40px 50px;
`

const HamburgerButton = styled.div`
  cursor: pointer;
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GlobalStyle />

      <Header>
        <StyledLogo>logo.</StyledLogo>

        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={OpenedMenuIcon} alt="Opened menu icon" />
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={ClosedMenuIcon} alt="Closed neby icon" />
            </motion.div>
          )}
        </HamburgerButton>
      </Header>

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
