import React from 'react'
import styled, { keyframes } from 'styled-components'
import background from './../../../assets/images/background.png'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center, center;
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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }`

const blinkCaret = keyframes`

 from, to { border-color: transparent }
  50% { border-color: orange }
`

const StyledTitle = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 2.5s steps(30, end), ${blinkCaret} 0.75s step-end infinite;
  /* width: 100%; */

  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* font-family: 'Montserrat'; */
    color: #fff;
    margin: 0;
    padding: 0;
  }
`

const HeroSection = () => {
  return (
    <Wrapper>
      <StyledTitle>
        <h1>Sprawdź, aby się przekonać.</h1>
      </StyledTitle>

      <StyledInput>
        <input type="text" placeholder="Enter your email" />
        <input type="button" value="Get Started" />
      </StyledInput>
    </Wrapper>
  )
}

export default HeroSection
