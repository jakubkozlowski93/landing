import React from 'react'
import styled from 'styled-components'
import Bar from './../../atoms/Bar/Bar'
import image from './../../../assets/images/realization.png'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SingleRealization = styled.div`
  margin-bottom: 40px;
`

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
`

const ImgWrapper = styled.div``

const StyledDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 121.5%;
  letter-spacing: 0.01em;
  color: #606060;
`

const StyledLink = styled(Link)`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 121.5%;
  letter-spacing: -0.03em;
  text-decoration: underline;
  color: black;
`

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
