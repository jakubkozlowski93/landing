import React from 'react'
import styled from 'styled-components'
import Bar from './../../atoms/Bar/Bar'
import TextField from '@mui/material/TextField'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 200px;
`

const Form = () => {
  return (
    <Wrapper>
      <Bar text="kontakt" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Wrapper>
  )
}
export default Form
