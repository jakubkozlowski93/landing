import styled, { keyframes } from 'styled-components'
import background from './../../../assets/images/background.jpg'

const typing = keyframes`
 from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }

`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center, center;
  margin-top: 100px;

  @media (min-width: 1000px) {
    height: calc(100vh - 100px);
    width: 100%;
    display: grid;
    grid-template-columns: 5;
    grid-template-rows: 1fr 75px;
    background: none;
    margin: 0 auto;
    padding: 0 50px;
    margin-top: 100px;
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 100px);
    padding: 100px 0;
  }

  @media (min-width: 1200px) {
    padding: 100px 0;
  }
`

export const DescriptionWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 20px;
    max-width: 370px;
    max-height: 350px;
    margin-bottom: 20px;
  }
`

export const StyledTitle = styled.h1`
  @media (min-width: 1000px) {
    font-family: Poppins, sans-serif;
    weight: 700;
    font-style: normal;
    font-size: 52px;
    margin: 0;
    text-transform: capitalize;
    position: relative;

    ::before {
      position: absolute;
      content: '';
      width: 60%;
      height: 60%;
      background: #ddd4c9;
      z-index: -1;
      left: -15px;
    }
  }
`

export const SmallTitle = styled.div`
  @media (min-width: 1000px) {
    overflow: hidden;
    white-space: nowrap;

    h2 {
      animation: ${typing} 2s steps(30, end), ${blinkCaret} 0.5s step-end infinite;
      overflow: hidden;
      border-right: 0.15em solid orange;
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 22px;
      line-height: 33px;
      text-transform: uppercase;
    }
  }
`

export const SmallDescription = styled.p`
  @media (min-width: 1000px) {
    font-family: Poppins, sans-serif;
    weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 20px;
    opacity: 0.6;
  }
`

export const ImgWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    grid-column: 2/6;
    grid-row: 1/2;
    max-width: 500px;
    max-height: 350px;
    grid-row: 1/2;
    margin-bottom: 20px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`
export const StyledInput = styled.form`
  background: #dbe5f4;
  border-radius: 100px;
  width: 280px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 20px;
  text-align: center;

  @media (min-width: 1000px) {
    grid-row: 2/3;
    grid-column: 1/6;
    margin: 0 auto;
    width: 380px;
    justify-content: space-between;
    padding: 0 15px 0 25px;
  }

  input[type='text'] {
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 21px;
    background: inherit;
    width: 140px;
    opacity: 0.7;
  }

  input[type='button'] {
    cursor: pointer;
    background: #0061fe;
    width: 85px;
    height: 35px;
    color: #f3f3f3;
    border: none;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.5px;
  }
`

export const SmallWrapper = styled.div`
  color: #fff;
  font-family: monospace;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  font-size: 11px;

  @media (min-width: 1000px) {
    display: none;
  }

  h1 {
    animation: ${typing} 2s steps(30, end), ${blinkCaret} 0.5s step-end infinite;
    overflow: hidden;
    border-right: 0.15em solid orange;
  }
`
