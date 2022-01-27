import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import ClosedMenuIcon from './../../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../../assets/icons/OpenedMenuIcon.svg'
import { motion } from 'framer-motion'
import FacebookIcon from './../../assets/icons/FacebookIcon.svg'
import LinkedInIcon from './../../assets/icons/LinkedInIcon.svg'
import InstagramIcon from './../../assets/icons/InstagramIcon.svg'

const Container = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 30px 50px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

const HamburgerButton = styled.div`
  cursor: pointer;
`

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #242635;
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  ul {
    list-style-type: none;
    display: flex;

    li {
      padding: 0 20px;
      width: 100%;
      color: #242635;
    }
  }
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Container>
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
        {isOpen ? null : (
          <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
            <Menu>
              <li>o mnie</li>
              <li>usługi</li>
              <li>realizacje</li>
              <li>kontakt</li>
            </Menu>
          </motion.div>
        )}

        {isOpen ? (
          `null`
        ) : (
          <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}>
            <Footer>
              <ul>
                <li>
                  <img src={FacebookIcon} alt="Facebook icon" />
                </li>
                <li>
                  <img src={LinkedInIcon} alt="LinkedIn icon" />
                </li>
                <li>
                  <img src={InstagramIcon} alt="Instagram Icon" />
                </li>
              </ul>
            </Footer>
          </motion.div>
        )}
      </Container>
    </>
  )
}

export default Home
