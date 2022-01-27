import React from 'react'
import styled from 'styled-components'
import input from './../../../../assets/icons/input.png'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ small }) => (small ? '16px' : '46px')};
  line-height: ${({ small }) => (small ? '24px' : '55px')};
  padding: 0;
  margin: 0;
`

const StyledInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;
  margin: 40px 10px;
`

const HeroSection = () => {
  return (
    <Wrapper>
      <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
        <StyledTitle>Company.</StyledTitle>
      </motion.div>

      <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.5 }}>
        <StyledTitle small>CREATE YOUR OWN STYLE</StyledTitle>
      </motion.div>
      <StyledInfo>
        A style for every story, get the latest style here at an inexpensive price.
        <br /> <br />A style for every story, get the latest style.
      </StyledInfo>
      <motion.div>
        <img src={input} />
      </motion.div>
    </Wrapper>
  )
}

export default HeroSection
