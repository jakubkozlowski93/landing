import React from 'react'
import HeroSection from '../components/organisms/HeroSection/HeroSection'
import Services from '../components/organisms/Services/Services'
import Footer from './../components/organisms/Footer/Footer'
import Portfolio from './../components/organisms/Portfolio/Portfolio'
import Form from '../components/organisms/Form/Form'
import Layout from '../components/Layout/Layout'
import Header from '../components/organisms/Header/Header'

const Home = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <Services />
      <Portfolio />
      <Form />
      <Footer />
    </Layout>
  )
}

export default Home
