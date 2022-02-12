import React from 'react'
import Bar from './../../atoms/Bar/Bar'
import image from './../../../assets/images/realization.png'
import { Wrapper, SingleRealization, StyledTitle, ImgWrapper, StyledDescription, StyledLink } from './Portfolio.styles'

const Portfolio = () => {
  return (
    <Wrapper>
      <Bar text="realizacje" />
      <SingleRealization>
        <StyledTitle>01 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image} alt="Single realization image" />
        </ImgWrapper>
        <StyledDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</StyledDescription>
        <StyledLink to="/singlepage">More shots from this project ↗</StyledLink>
      </SingleRealization>
      <SingleRealization>
        <StyledTitle>01 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image} alt="Single realization image" />
        </ImgWrapper>
        <StyledDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</StyledDescription>
        <StyledLink href="#">More shots from this project ↗</StyledLink>
      </SingleRealization>
      <SingleRealization>
        <StyledTitle>01 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image} alt="Single realization image" />
        </ImgWrapper>
        <StyledDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</StyledDescription>
        <StyledLink href="#">More shots from this project ↗</StyledLink>
      </SingleRealization>
    </Wrapper>
  )
}

export default Portfolio
