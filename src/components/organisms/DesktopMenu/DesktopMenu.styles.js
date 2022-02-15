import styled, { keyframes } from 'styled-components'

const expand = keyframes`
 from {
    width: 0;
  }
  to {
    width: 70%;
  }
`

export const StyledMenu = styled.ul`
  display: none;

  @media (min-width: 900px) {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    margin: 0;
    padding: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: ${({ isScrolled }) => (isScrolled ? 'rgb(243, 243, 243)' : `rgb(46, 53, 63)`)};
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 21px;
    padding: 0 10px;
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
      animation: ${expand} 0.5s ease;
    }
  }
`
