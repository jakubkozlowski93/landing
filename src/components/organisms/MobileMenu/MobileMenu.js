import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  margin: 0;
  padding: 0;

  @media (min-width: 900px) {
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
    color: #242635;
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;

    @media (min-width: 900px) {
      font-family: Poppins, sans-serif;
      font-size: 21px;
      padding: 0 10px;
    }
  }
`

const MobileMenu = () => {
  return (
    <StyledMenu>
      <li>o mnie</li>
      <li>usługi</li>
      <li>realizacje</li>
      <li>kontakt</li>
    </StyledMenu>
  )
}

export default MobileMenu
