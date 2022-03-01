import React, { useEffect, useState } from 'react'
import { StyledMenu } from './DesktopMenu.styles'
import scrollTo from 'gatsby-plugin-smoothscroll'

const DesktopMenu = ({ isOpen }) => {
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
    <StyledMenu isScrolled={isScrolled} isOpen={isOpen}>
      <li onClick={() => scrollTo('#hero')}>o mnie</li>
      <li onClick={() => scrollTo('#services')}>usługi</li>
      <li onClick={() => scrollTo('#portfolio')}>realizacje</li>
      <li onClick={() => scrollTo('#contact')}>kontakt</li>
    </StyledMenu>
  )
}

export default DesktopMenu
