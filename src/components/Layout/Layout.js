import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './../../styles/GlobalStyle'
import Header from '../../components/organisms/Header/Header'

const ChildrensContainer = styled.div`
  width: 100%;
  padding: 80px 0px 40px 0px;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1500px) {
    width: 80%;
    background: #fcfafa;
  }
`

const Layout = ({ children, isOpen, toggleMenu }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <ChildrensContainer>{children}</ChildrensContainer>
    </Wrapper>
  )
}

export default Layout
