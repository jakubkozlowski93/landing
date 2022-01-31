import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import MobileIcon from './../../../assets/icons/MobileIcon.svg'
import IdeaIcon from './../../../assets/icons/IdeaIcon.svg'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
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

const Loader = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #18315b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledImg = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`

const AnimatedDiv = styled.div`
  display: flex;
  width: 100%;
  background: red;
  justify-content: space-between;
  padding: 0 50px;
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeIn', duration: 2, delay: 0.6 }}>
        <StyledInfo>
          A style for every story, get the latest style here at an inexpensive price.
          <br /> <br />A style for every story, get the latest style.
        </StyledInfo>
      </motion.div>
      <StyledInput>
        <input type="text" placeholder="Enter your email" />
        <input type="button" value="Get Started" />
      </StyledInput>

      <AnimatedDiv>
        <StyledImg>
          <img src={IdeaIcon} alt="test" />
        </StyledImg>
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: ['50% 50%', '2% 50%'],
            x: 0,
          }}
          initial={{
            x: 25,
          }}
          transition={{
            flip: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          style={{
            height: '50px',
            background: '#00ad9f',
            width: '50px',
            borderRadius: '2% 50%',
          }}
        ></motion.div>

        <StyledImg>
          <img src={MobileIcon} alt="test" />
        </StyledImg>
      </AnimatedDiv>
    </Wrapper>
  )
}

export default HeroSection
