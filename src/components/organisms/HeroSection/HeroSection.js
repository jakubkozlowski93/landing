import React from 'react'
import { Wrapper, StyledInput, SmallWrapper, DescriptionWrapper, StyledTitle, SmallTitle, SmallDescription, ImgWrapper } from './HeroSection.styles'
import herophoto from './../../../assets/images/herophoto.png'

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
      <DescriptionWrapper>
        <StyledTitle>company.</StyledTitle>
        <SmallTitle>create your own style</SmallTitle>
        <SmallDescription>A style for every story, get the latest style here at an inexpensive price.</SmallDescription>
        <SmallDescription>A style for every story, get the latest style.</SmallDescription>
      </DescriptionWrapper>
      <ImgWrapper>
        <img src={herophoto} alt="Hero photo" />
      </ImgWrapper>
    </Wrapper>
  )
}

export default HeroSection
