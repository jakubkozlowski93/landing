import styled, { keyframes } from 'styled-components'
import background from './../../../assets/images/background.png'

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
  margin-top: 20px;

  @media (min-width: 1000px) {
    height: calc(100vh - 70px);
    width: 100%;
    display: grid;
    grid-template-columns: 5;
    grid-template-rows: 1;
    background: none;
    padding: 0;
    margin: 0;
  }
`

export const DescriptionWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    max-height: 375px;
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

////

export const StyledTitle = styled.h1`
  @media (min-width: 1000px) {
    font-family: Poppins, sans-serif;
    weight: 700;
    font-style: normal;
    font-size: 52px;
    /* line-height: 108px; */
    margin: 0;
  }
`

export const SmallTitle = styled.h2`
  @media (min-width: 1000px) {
    font-family: Poppins, sans-serif;
    weight: 600;
    font-style: normal;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;
  }
`

export const SmallDescription = styled.p`
  @media (min-width: 1000px) {
    font-family: Poppins, sans-serif;
    weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    opacity: 0.6;
  }
`

export const ImgWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    grid-column: 3/6;
    /* height: 60vh; */
    max-width: 520px;
    max-height: 375px;
    grid-row: 1/2;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`
///////////////////
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
    display: none;
  }

  input[type='text'] {
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 21px;
    background: inherit;
    width: 140px;
    opacity: 0.6;
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
