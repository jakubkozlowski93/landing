import React from 'react'
import styled from 'styled-components'
import { StyledLogo } from '../../atoms/Logo/Logo'
import ClosedMenuIcon from './../../../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../../../assets/icons/OpenedMenuIcon.svg'
import { motion } from 'framer-motion'

const Wrapper = styled.nav`
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

const Header = ({ isOpen, toggleMenu }) => {
  React.useEffect(() => {
    window.addEventListener('scroll', () => console.log(window.scrollY), true)
  }, [])

  return (
    <Wrapper>
      <StyledLogo>logo.</StyledLogo>

      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? (
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={OpenedMenuIcon} alt="Opened menu icon" />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={ClosedMenuIcon} alt="Closed menu icon" />
          </motion.div>
        )}
      </HamburgerButton>
    </Wrapper>
  )
}

export default Header
