import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  width: 140px;
  height: 18px;
  border-left: 2px solid;
  border-right: 2px solid;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-transform: uppercase;
`

const Bar = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}

export default Bar
