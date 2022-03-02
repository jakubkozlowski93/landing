import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 50px 50px 50px 50px;
  background: ${({ isScrolled }) => (isScrolled ? 'rgb(46, 53, 63)' : null)};
  z-index: 2;
  box-shadow: ${({ isScrolled }) => (isScrolled ? `-2px 2px 12px 1px rgba(120, 119, 120, 1)` : 'rgba(149, 157, 165, 0.2) 0px 8px 24px')};
  border-radius: 4px;

  @media (min-width: 900px) {
    opacity: ${({ isScrolled }) => (isScrolled ? '0.8' : '1')};
  }

  @media (min-width: 1500px) {
    width: 80%;
  }
`
export const HamburgerButton = styled.div`
  cursor: pointer;

  line {
    stroke: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }
  rect {
    stroke: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }
  path {
    fill: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
  }

  @media (min-width: 900px) {
    display: none;
  }
`

const expand = keyframes`
 from {
    width: 0;
  }
  to {
    width: 70%;
  }
`

export const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: rgb(243, 243, 243);
  height: calc(100vh - 100px);
  left: 0;
  right: 0;
  width: 100%;
  position: absolute;
  top: 100px;
  transform: translateX(${({ isOpen }) => (isOpen ? 'calc(100%)' : 0)});
  transition: transform 0.3s ease-in-out;

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #242635;
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    height: 70vh;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: static;
    transform: none;

    li {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.03em;
      color: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
      text-transform: capitalize;
      cursor: pointer;
      text-align: center;
      font-family: Poppins, sans-serif;
      font-size: 21px;
      padding: 0 20px;
      position: relative;

      :hover::before {
        content: '';
        position: absolute;
        width: 70%;
        height: 80%;
        background: #00ad9f;
        bottom: 50%;
        left: -1px;
        z-index: -1;
        opacity: 0.5;
        animation: ${expand} 0.4s ease;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`
