import React, { useState } from 'react'
import SocialIcons from '../components/molecules/SocialIcons/SocialIcons'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Services from '../components/organisms/Services/Services'
import Footer from './../components/organisms/Footer/Footer'
import { motion } from 'framer-motion'
import Portfolio from './../components/organisms/Portfolio/Portfolio'
import Form from '../components/organisms/Form/Form'
import Layout from '../components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Services />
      <Portfolio />
      <Form />
      <Footer />
    </Layout>
  )
}

export default Home
