import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import SocialIcons from '../components/molecules/SocialIcons/SocialIcons'
import image from './../assets/images/realization.png'
import Carousel from './../components/molecules/Carousel/Carousel'

const Wrapper = styled.div`
  padding: 50px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
  text-align: right;
`

const ImgWrapper = styled.div``

const StyledDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 121.5%;
  letter-spacing: 0.01em;
  color: #606060;
`

const singlepage = () => {
  return (
    <Layout>
      <Wrapper>
        <StyledTitle>01 / PROJECT NAME</StyledTitle>
        <ImgWrapper>
          <img src={image} alt="Single realization" />
        </ImgWrapper>
        <StyledDescription>
          Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sint aperiam deleniti ratione nobis, impedit in modi corrupti non
          libero distinctio incidunt neque. Fugit, consequatur exercitationem maxime eaque repudiandae esse.
        </StyledDescription>
      </Wrapper>
      <Carousel />
      <SocialIcons />
    </Layout>
  )
}

export default singlepage
