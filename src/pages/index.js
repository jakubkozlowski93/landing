import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import ClosedMenuIcon from './../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../assets/icons/OpenedMenuIcon.svg'
import { motion } from 'framer-motion'
import Footer from './../components/organisms/Footer/Footer'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Bar from './../components/atoms/Bar/Bar'
import Menu from './../components/organisms/Menu/Menu'

const Container = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 30px 50px 40px 50px;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

const HamburgerButton = styled.div`
  cursor: pointer;
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <StyledLogo>logo.</StyledLogo>

          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <motion.div whileHover={{ scale: 1.1 }}>
                <img src={OpenedMenuIcon} alt="Opened menu icon" />
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }}>
                <img src={ClosedMenuIcon} alt="Closed neby icon" />
              </motion.div>
            )}
          </HamburgerButton>
        </Header>
        {isOpen ? null : (
          <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
            <Menu />
          </motion.div>
        )}
        {isOpen ? (
          <>
            <HeroSection />
            <Bar text="usługi" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sint iusto fugit sit quae dolorem, quas nihil repellendus unde ipsam
            culpa amet ab cumque. Similique aliquam assumenda perspiciatis atque possimus. Ut tempora illo sunt nemo laudantium officiis incidunt
            consequatur obcaecati neque dolorum dicta unde alias, laboriosam fugiat minima? Molestiae doloremque odit ducimus quidem unde numquam
            adipisci accusantium, maxime blanditiis perspiciatis? Vel veniam dolor dolores sequi fugiat optio ratione eligendi accusamus nisi ut, quod
            illo cum veritatis soluta. Aperiam dolor debitis nisi alias tenetur ratione architecto, cumque, inventore veritatis sequi iure.
            Voluptatibus nostrum labore facilis similique soluta voluptatum minima dolorum, eum corrupti maxime dolorem culpa provident aspernatur
            doloribus laudantium, eius est fuga cumque rerum, qui eligendi. Quibusdam rerum aperiam labore a. Iusto eum blanditiis ab laudantium?
            Corrupti, minus consequatur commodi veritatis nobis sapiente architecto voluptatum repellat delectus aspernatur molestias et deleniti,
            veniam voluptates dolorem vel quis sequi rerum obcaecati. Quidem, optio.
          </>
        ) : (
          <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}>
            <Footer />
          </motion.div>
        )}
      </Container>
    </>
  )
}

export default Home
