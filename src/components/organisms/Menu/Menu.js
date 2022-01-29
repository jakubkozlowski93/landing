import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  margin: 0;
  padding: 0;

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
  }
`

const Menu = () => {
  return (
    <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
      <StyledMenu>
        <li>o mnie</li>
        <li>usługi</li>
        <li>realizacje</li>
        <li>kontakt</li>
      </StyledMenu>
    </motion.div>
  )
}

export default Menu
