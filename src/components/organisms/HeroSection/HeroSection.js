import React from 'react'
import { Wrapper, StyledInput, SmallWrapper } from './HeroSection.styles'

const HeroSection = () => {
  return (
    <Wrapper id="hero">
      <SmallWrapper>
        <h1>The cat and the hat dosent.</h1>
      </SmallWrapper>

      <StyledInput>
        <input type="text" placeholder="Enter your email" />
        <input type="button" value="Get Started" />
      </StyledInput>
    </Wrapper>
  )
}

export default HeroSection
