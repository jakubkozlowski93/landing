import React from 'react'
import { StyledMenu } from './MobileMenu.styles'

const MobileMenu = () => {
  return (
    <StyledMenu>
      <li>o mnie</li>
      <li>usługi</li>
      <li>realizacje</li>
      <li>
        <a href="#footer">kontakt</a>
      </li>
    </StyledMenu>
  )
}

export default MobileMenu
