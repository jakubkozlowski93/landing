import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  display: none;

  @media (min-width: 900px) {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 21px;
    padding: 0 10px;
  }
`

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
