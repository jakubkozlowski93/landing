import React from 'react'
import Bar from './../../atoms/Bar/Bar'
import image1 from './../../../assets/images/realization1.png'
import image2 from './../../../assets/images/realization2.png'
import image3 from './../../../assets/images/realization3.png'

import { Wrapper, SingleRealization, StyledTitle, ImgWrapper, FirstDescription, SecondDescription, StyledLink } from './Portfolio.styles'

const Portfolio = () => {
  return (
    <Wrapper id="portfolio">
      <Bar text="realizacje" />
      <SingleRealization>
        <StyledTitle>01 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image1} alt="Single realization image" />
        </ImgWrapper>
        <FirstDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</FirstDescription>
        <SecondDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</SecondDescription>
        <StyledLink to="/singlepage">More shots from this project ↗</StyledLink>
      </SingleRealization>
      <SingleRealization>
        <StyledTitle>02 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image2} alt="Single realization image" />
        </ImgWrapper>
        <FirstDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</FirstDescription>
        <SecondDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</SecondDescription>
        <StyledLink to="/singlepage">More shots from this project ↗</StyledLink>
      </SingleRealization>
      <SingleRealization>
        <StyledTitle>03 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image3} alt="Single realization image" />
        </ImgWrapper>
        <FirstDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</FirstDescription>
        <SecondDescription>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</SecondDescription>
        <StyledLink to="/singlepage">More shots from this project ↗</StyledLink>
      </SingleRealization>
    </Wrapper>
  )
}

export default Portfolio
