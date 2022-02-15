import styled from 'styled-components'

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
  box-shadow: ${({ isScrolled }) => (isScrolled ? `-2px 2px 12px 1px rgba(120, 119, 120, 1)` : null)};
  opacity: 0.8;
  border-radius: 4px;
  z-index: 2;
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