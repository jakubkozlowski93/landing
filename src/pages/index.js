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
  height: 100%;
`

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const HamburgerButton = styled.div`
  height: 100%;
`

const Menu = styled.ul``

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(motion)
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <StyledLogo>logo.</StyledLogo>

          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? OpenedMenuIcon : ClosedMenuIcon} />
          </HamburgerButton>
        </Header>
        {isOpen ? null : (
          <Menu>
            <li>o mnie</li>
            <li>usługi</li>
            <li>realizacje</li>
            <li>kontakt</li>
          </Menu>
        )}
      </Container>
    </>
  )
}

export default Home
