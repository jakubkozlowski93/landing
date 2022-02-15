import React, { useEffect, useState } from 'react'
import { StyledMenu } from './DesktopMenu.styles'

const DesktopMenu = () => {
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
    <StyledMenu isScrolled={isScrolled}>
      <li>o mnie</li>
      <li>usługi</li>
      <li>realizacje</li>
      <li>kontakt</li>
    </StyledMenu>
  )
}

export default DesktopMenu
