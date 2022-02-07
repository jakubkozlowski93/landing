import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import MobileIcon from './../../../assets/icons/MobileIcon.svg'
import IdeaIcon from './../../../assets/icons/IdeaIcon.svg'
import background from './../../../assets/images/background.png'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* margin-top: 90px; */
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center, center;
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

const StyledInput = styled.form`
  background: #dbe5f4;
  border-radius: 100px;
  width: 280px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  text-align: center;

  input[type='text'] {
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 21px;
    background: inherit;
    width: 140px;
    opacity: 0.6;
  }

  input[type='button'] {
    cursor: pointer;
    background: #0061fe;
    width: 85px;
    height: 35px;
    color: #f3f3f3;
    border: none;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.5px;
  }
`

const StyledImg = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`

const AnimatedDiv = styled.div``

const HeroSection = () => {
  return (
    <Wrapper>
      {/* <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
        <StyledTitle>Company.</StyledTitle>
      </motion.div>

      <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.5 }}>
        <StyledTitle small>CREATE YOUR OWN STYLE</StyledTitle>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeIn', duration: 2, delay: 0.6 }}>
        <StyledInfo>
          A style for every story, get the latest style here at an inexpensive price.
          <br /> <br />A style for every story, get the latest style.
        </StyledInfo>
      </motion.div> */}
      <StyledInput>
        <input type="text" placeholder="Enter your email" />
        <input type="button" value="Get Started" />
      </StyledInput>

      <AnimatedDiv>
        <motion.div initial={{ opacity: 0 }} transition={{ opacity: 1, delay: 2 }}>
          <StyledImg>
            <img src={MobileIcon} alt="test" />
          </StyledImg>
        </motion.div>
      </AnimatedDiv>
    </Wrapper>
  )
}

export default HeroSection
