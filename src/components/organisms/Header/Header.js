import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledLogo } from '../../atoms/Logo/Logo'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 50px 50px 50px 50px;
  background: ${({ isScrolled }) => (isScrolled ? 'rgb(46, 53, 63)' : null)};
  z-index: 2;
  box-shadow: ${({ isScrolled }) => (isScrolled ? `-2px 2px 12px 1px rgba(120, 119, 120, 1)` : null)};
  opacity: 0.8;
  border-radius: 4px;
`

const HamburgerButton = styled.div`
  cursor: pointer;

  line {
    stroke: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }
  rect {
    stroke: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }
  path {
    fill: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }
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
      <StyledLogo isScrolled={isScrolled}>logo.</StyledLogo>

      <HamburgerButton animate={{ scale: 1 }} isScrolled={isScrolled} onClick={toggleMenu}>
        {isOpen ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="#242635" />
            <line x1="11.4142" y1="11" x2="39" y2="38.5858" stroke="black" stroke-width="2" stroke-linecap="round" />
            <line x1="10" y1="38.5858" x2="37.5858" y2="11" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="#242635" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z"
              fill="#242635"
            />
          </svg>
        )}
      </HamburgerButton>
    </Wrapper>
  )
}

export default Header
