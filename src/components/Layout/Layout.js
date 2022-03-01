import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './../../styles/GlobalStyle'
import Header from '../../components/organisms/Header/Header'
import AppProviders from '../../providers/AppProviders'

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

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <AppProviders>
        <Header />

        <ChildrensContainer>{children}</ChildrensContainer>
      </AppProviders>
    </Wrapper>
  )
}

export default Layout
