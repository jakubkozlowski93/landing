import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import SocialIcons from '../components/molecules/SocialIcons/SocialIcons'
import image from './../assets/images/realization.png'
import Carousel from '../components/molecules/Carousel/Carousel'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import MobileMenu from '../components/organisms/MobileMenu/MobileMenu'
import image1 from './../assets/images/realization1.png'
import image2 from './../assets/images/realization2.png'
import image3 from './../assets/images/realization3.png'

const Wrapper = styled.div`
  padding: 0 50px 40px 59px;
  /* width: 100%; */
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
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

const ImgWrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

const FirstDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 131.5%;
  letter-spacing: 0.01em;
  color: #606060;
  grid: 2/3;
  grid-column: 1/2;
  font-weight: 600;
`

const SecondDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 121.5%;
  letter-spacing: 0.01em;
  color: #606060;
  margin: 0 0 30px 0;
  font-size: 13px;
  font-weight: 500;
  text-align: justify;
`

const BackHomeWrapper = styled.div`
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

const Singlepage = () => {
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const [isOpen, setIsOpen] = useState(true)

  return (
    <Layout toggleMenu={toggleMenu} isOpen={isOpen}>
      {isOpen ? (
        <>
          <Wrapper>
            <StyledTitle>01 / PROJECT NAME</StyledTitle>
            <ImgWrapper>
              <img src={image1} alt="Single realization" />
            </ImgWrapper>
            <FirstDescription>
              Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
              <SecondDescription>
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sint aperiam deleniti ratione nobis, impedit in modi corrupti non
                libero distinctio incidunt neque. Fugit, consequatur exercitationem maxime eaque repudiandae esse.
              </SecondDescription>
            </FirstDescription>
            <Carousel />
            <SecondDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas ex aspernatur ducimus. Quas tempora, nisi accusamus ex aut
              doloribus. Sit facilis doloribus nobis perferendis iste ea? Reprehenderit, maiores natus! Necessitatibus sint fugiat a quo quod officia
              repellat voluptas fuga error distinctio, amet veritatis cum magnam dolor eligendi molestias aut voluptate non magni illo neque
              voluptatem ullam. Eum, quaerat sit.
            </SecondDescription>
          </Wrapper>

          <SocialIcons />
          <Link to="/">
            <BackHomeWrapper>
              <svg width="158" height="52" viewBox="0 0 158 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.3036 37.8767H44.5236V42.1367C43.9536 42.5667 43.2936 42.8967 42.5436 43.1267C41.7936 43.3567 41.0386 43.4717 40.2786 43.4717C39.1886 43.4717 38.2086 43.2417 37.3386 42.7817C36.4686 42.3117 35.7836 41.6667 35.2836 40.8467C34.7936 40.0167 34.5486 39.0817 34.5486 38.0417C34.5486 37.0017 34.7936 36.0717 35.2836 35.2517C35.7836 34.4217 36.4736 33.7767 37.3536 33.3167C38.2336 32.8467 39.2236 32.6117 40.3236 32.6117C41.2436 32.6117 42.0786 32.7667 42.8286 33.0767C43.5786 33.3867 44.2086 33.8367 44.7186 34.4267L43.1586 35.8667C42.4086 35.0767 41.5036 34.6817 40.4436 34.6817C39.7736 34.6817 39.1786 34.8217 38.6586 35.1017C38.1386 35.3817 37.7336 35.7767 37.4436 36.2867C37.1536 36.7967 37.0086 37.3817 37.0086 38.0417C37.0086 38.6917 37.1536 39.2717 37.4436 39.7817C37.7336 40.2917 38.1336 40.6917 38.6436 40.9817C39.1636 41.2617 39.7536 41.4017 40.4136 41.4017C41.1136 41.4017 41.7436 41.2517 42.3036 40.9517V37.8767ZM54.6465 43.4717C53.5565 43.4717 52.5715 43.2367 51.6915 42.7667C50.8215 42.2967 50.1365 41.6517 49.6365 40.8317C49.1465 40.0017 48.9015 39.0717 48.9015 38.0417C48.9015 37.0117 49.1465 36.0867 49.6365 35.2667C50.1365 34.4367 50.8215 33.7867 51.6915 33.3167C52.5715 32.8467 53.5565 32.6117 54.6465 32.6117C55.7365 32.6117 56.7165 32.8467 57.5865 33.3167C58.4565 33.7867 59.1415 34.4367 59.6415 35.2667C60.1415 36.0867 60.3915 37.0117 60.3915 38.0417C60.3915 39.0717 60.1415 40.0017 59.6415 40.8317C59.1415 41.6517 58.4565 42.2967 57.5865 42.7667C56.7165 43.2367 55.7365 43.4717 54.6465 43.4717ZM54.6465 41.4017C55.2665 41.4017 55.8265 41.2617 56.3265 40.9817C56.8265 40.6917 57.2165 40.2917 57.4965 39.7817C57.7865 39.2717 57.9315 38.6917 57.9315 38.0417C57.9315 37.3917 57.7865 36.8117 57.4965 36.3017C57.2165 35.7917 56.8265 35.3967 56.3265 35.1167C55.8265 34.8267 55.2665 34.6817 54.6465 34.6817C54.0265 34.6817 53.4665 34.8267 52.9665 35.1167C52.4665 35.3967 52.0715 35.7917 51.7815 36.3017C51.5015 36.8117 51.3615 37.3917 51.3615 38.0417C51.3615 38.6917 51.5015 39.2717 51.7815 39.7817C52.0715 40.2917 52.4665 40.6917 52.9665 40.9817C53.4665 41.2617 54.0265 41.4017 54.6465 41.4017ZM79.7372 37.8317C80.3372 38.0217 80.8072 38.3417 81.1472 38.7917C81.4872 39.2317 81.6572 39.7767 81.6572 40.4267C81.6572 41.3467 81.2972 42.0567 80.5772 42.5567C79.8672 43.0467 78.8272 43.2917 77.4572 43.2917H72.0272V32.7917H77.1572C78.4372 32.7917 79.4172 33.0367 80.0972 33.5267C80.7872 34.0167 81.1322 34.6817 81.1322 35.5217C81.1322 36.0317 81.0072 36.4867 80.7572 36.8867C80.5172 37.2867 80.1772 37.6017 79.7372 37.8317ZM74.4422 34.6217V37.0967H76.8572C77.4572 37.0967 77.9122 36.9917 78.2222 36.7817C78.5322 36.5717 78.6872 36.2617 78.6872 35.8517C78.6872 35.4417 78.5322 35.1367 78.2222 34.9367C77.9122 34.7267 77.4572 34.6217 76.8572 34.6217H74.4422ZM77.2772 41.4617C77.9172 41.4617 78.3972 41.3567 78.7172 41.1467C79.0472 40.9367 79.2122 40.6117 79.2122 40.1717C79.2122 39.3017 78.5672 38.8667 77.2772 38.8667H74.4422V41.4617H77.2772ZM93.1927 41.0417H88.3177L87.3877 43.2917H84.8977L89.5777 32.7917H91.9777L96.6727 43.2917H94.1227L93.1927 41.0417ZM92.4277 39.1967L90.7627 35.1767L89.0977 39.1967H92.4277ZM105.421 43.4717C104.351 43.4717 103.381 43.2417 102.511 42.7817C101.651 42.3117 100.971 41.6667 100.471 40.8467C99.9812 40.0167 99.7362 39.0817 99.7362 38.0417C99.7362 37.0017 99.9812 36.0717 100.471 35.2517C100.971 34.4217 101.651 33.7767 102.511 33.3167C103.381 32.8467 104.356 32.6117 105.436 32.6117C106.346 32.6117 107.166 32.7717 107.896 33.0917C108.636 33.4117 109.256 33.8717 109.756 34.4717L108.196 35.9117C107.486 35.0917 106.606 34.6817 105.556 34.6817C104.906 34.6817 104.326 34.8267 103.816 35.1167C103.306 35.3967 102.906 35.7917 102.616 36.3017C102.336 36.8117 102.196 37.3917 102.196 38.0417C102.196 38.6917 102.336 39.2717 102.616 39.7817C102.906 40.2917 103.306 40.6917 103.816 40.9817C104.326 41.2617 104.906 41.4017 105.556 41.4017C106.606 41.4017 107.486 40.9867 108.196 40.1567L109.756 41.5967C109.256 42.2067 108.636 42.6717 107.896 42.9917C107.156 43.3117 106.331 43.4717 105.421 43.4717ZM118.003 39.1667L116.593 40.6367V43.2917H114.178V32.7917H116.593V37.6967L121.243 32.7917H123.943L119.593 37.4717L124.198 43.2917H121.363L118.003 39.1667Z"
                  fill="black"
                />
                <path d="M76.8878 10.9587H79.9933L76.5428 7.28188L79.9933 3.60502H76.8878L73.4373 7.28188L76.8878 10.9587Z" fill="black" />
                <path d="M81.7186 10.9587H84.824L81.3735 7.28188L84.824 3.60502H81.7186L78.2681 7.28188L81.7186 10.9587Z" fill="black" />
              </svg>
            </BackHomeWrapper>
          </Link>
        </>
      ) : (
        <>
          <MobileMenu />
          <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}>
            <SocialIcons />
          </motion.div>
        </>
      )}
    </Layout>
  )
}

export default Singlepage
