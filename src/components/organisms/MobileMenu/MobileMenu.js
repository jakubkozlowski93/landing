import React from 'react'
import { StyledMenu } from './MobileMenu.styles'
import scrollTo from 'gatsby-plugin-smoothscroll'

const MobileMenu = () => {
  return (
    <StyledMenu>
      <li onClick={() => scrollTo('#hero')}>o mnie</li>
      <li onClick={() => scrollTo('#services')}>usługi</li>
      <li onClick={() => scrollTo('#portfolio')}>realizacje</li>
      <li onClick={() => scrollTo('#contact')}>kontakt</li>
    </StyledMenu>
  )
}

export default MobileMenu
