import React, { useState } from 'react'
import SocialIcons from './../components/molecules/SocialIcons/SocialIcons'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Menu from '../components/organisms/MobileMenu/MobileMenu'
import Services from '../components/organisms/Services/Services'
import Footer from './../components/organisms/Footer/Footer'
import { motion } from 'framer-motion'
import Portfolio from './../components/organisms/Portfolio/Portfolio'
import Form from '../components/organisms/Form/Form'
import Layout from '../components/Layout/Layout'
import MobileMenu from '../components/organisms/MobileMenu/MobileMenu'

const Home = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Layout toggleMenu={toggleMenu} isOpen={isOpen}>
      {isOpen ? (
        <>
          <HeroSection />
          <Services />
          <Portfolio />
          <Form />
          <Footer />
        </>
      ) : (
        <>
          <motion.div initial={{ x: '100vh' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 60 }}>
            <MobileMenu />
          </motion.div>
          <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}>
            <SocialIcons />
          </motion.div>
        </>
      )}
    </Layout>
  )
}

export default Home
