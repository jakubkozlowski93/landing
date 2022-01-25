import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'

const Container = styled.div`
  width: 100%;
  padding: 30px 50px;
`

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <StyledLogo>logo.</StyledLogo>
      </Container>
    </>
  )
}

export default Home
