import React, { useEffect, useState } from 'react'
import { StyledLogo } from '../../atoms/Logo/Logo'
import DesktopMenu from '../DesktopMenu/DesktopMenu'
import { Wrapper, HamburgerButton } from './Header.styles'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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
      <StyledLogo to="/" isScrolled={isScrolled}>
        logo.
      </StyledLogo>

      <HamburgerButton animate={{ scale: 1 }} isScrolled={isScrolled} onClick={toggleMenu}>
        {isOpen ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="#242635" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z"
              fill="#242635"
            />
          </svg>
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="#242635" />
            <line x1="11.4142" y1="11" x2="39" y2="38.5858" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="38.5858" x2="37.5858" y2="11" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </HamburgerButton>
      <DesktopMenu isScrolled={isScrolled} isOpen={isOpen} />
    </Wrapper>
  )
}

export default Header
