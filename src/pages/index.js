import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import MySvg from './../../assets/icons/ClosedMenuIcon.svg'

const Container = styled.div`
  width: 100%;
  padding: 30px 50px;
`

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavMenu>
          <StyledLogo>logo.</StyledLogo>
          <img src={MySvg} />
        </NavMenu>
      </Container>
    </>
  )
}

export default Home
