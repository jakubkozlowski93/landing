import React, { useEffect, useState } from 'react'
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
  background: ${({ isScrolled }) => (isScrolled ? '#2e353f' : `rgb(243, 243, 243)`)};
  /* background: #2e353f; */
  z-index: 2;
  /* box-shadow: -2px 2px 12px 1px rgba(120, 119, 120, 1); */
  opacity: 0.8;
  border-radius: 4px;
`

const HamburgerButton = styled.div`
  cursor: pointer;
`

const Header = ({ isOpen, toggleMenu }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        setScrollPosition(window.scrollY)
        if (scrollPosition >= 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      },
      true
    )
  }, [scrollPosition])

  return (
    <Wrapper isScrolled={isScrolled}>
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
