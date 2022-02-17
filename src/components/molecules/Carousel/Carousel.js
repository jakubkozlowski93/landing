import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Wrapper = styled.div`
  padding: 0 50px;
  width: 100%;
  margin-bottom: 70px;

  @media (min-width: 1000px) {
    display: none;
  }

  div {
    height: 200px;

    @media (min-width: 600px) {
      height: 300px;
    }

    @media (min-width: 800px) {
      height: 400px;
    }

    img {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
`

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src="https://source.unsplash.com/random" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random" />
        </div>
      </Slider>
    </Wrapper>
  )
}

export default Carousel
