import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './../../styles/GlobalStyle'
import Header from '../../components/organisms/Header/Header'

const Container = styled.div`
  width: 100%;
  padding: 80px 0px 40px 0px;
  overflow-x: hidden;
`

const Layout = ({ children, isOpen, toggleMenu }) => {
  return (
    <>
      <GlobalStyle />
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
