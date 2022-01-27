import React, { useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import styled from 'styled-components'
import { StyledLogo } from './../components/atoms/Logo/Logo'
import ClosedMenuIcon from './../../assets/icons/ClosedMenuIcon.svg'
import OpenedMenuIcon from './../../assets/icons/OpenedMenuIcon.svg'

const Container = styled.div`
  width: 100%;
  padding: 30px 50px;
  height: 100%;
`

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Menu = styled.ul``

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <StyledLogo>logo.</StyledLogo>

          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? OpenedMenuIcon : ClosedMenuIcon} />
          </div>
        </Header>
        {isOpen ? null : (
          <Menu>
            <li>o mnie</li>
            <li>usługi</li>
            <li>realizacje</li>
            <li>kontakt</li>
          </Menu>
        )}
      </Container>
    </>
  )
}

export default Home
