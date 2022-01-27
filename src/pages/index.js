import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import ClosedMenuIcon from './../../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../../assets/icons/OpenedMenuIcon.svg'
import { motion } from 'framer-motion'

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
  align-items: center;
  height: 100%;

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #242635;
    text-transform: capitalize;
    padding: 20px;
    cursor: pointer;
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
                <img src={OpenedMenuIcon} />
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }}>
                <img src={ClosedMenuIcon} />
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
      </Container>
    </>
  )
}

export default Home
