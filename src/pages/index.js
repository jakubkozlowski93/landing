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
  width: 100%;
  padding: 30px 50px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #242635;
    text-transform: capitalize;
    padding: 20px;
    cursor: pointer;
    width: 100%;
  }
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;

    li {
      padding: 0 20px;
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
      </Container>
    </>
  )
}

export default Home
