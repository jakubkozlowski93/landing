import React from 'react'
import styled from 'styled-components'
import Bar from './../../atoms/Bar/Bar'
import TextField from '@mui/material/TextField'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px;
  width: 100%;

  @media (min-width: 600px) {
    width: 600px;
    margin: 0 auto;
  }
`

const style = {
  marginBottom: '20px',
}

const Form = () => {
  return (
    <Wrapper id="contact" autoComplete="off">
      <Bar text="kontakt" />
      <TextField id="name" label="ENTER YOUR NAME*" variant="outlined" sx={{ ...style }} fullWidth />
      <TextField id="email" label="ENTER YOUR EMAIL*" variant="outlined" sx={{ ...style }} fullWidth />
      <TextField id="phone" label="ENTER YOUR PHONE*" variant="outlined" sx={{ ...style }} fullWidth />
      <TextField id="message" label="YOUR MESSAGE*" variant="outlined" sx={{ ...style }} fullWidth multiline rows={4} />
      <Bar text="submit" />
    </Wrapper>
  )
}
export default Form
