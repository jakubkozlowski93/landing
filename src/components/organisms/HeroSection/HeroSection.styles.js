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

export const blinkCaret = keyframes`
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

  h1 {
    animation: ${typing} 2s steps(30, end), ${blinkCaret} 0.5s step-end infinite;
    overflow: hidden;
    border-right: 0.15em solid orange;
  }
`
