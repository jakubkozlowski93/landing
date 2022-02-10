import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(243, 243, 243);
  font-family: Poppins, sans-serif;

  h1 {
    font-size: 70px;
    margin: 0;
    line-height: 1;
  }

  h2 {
    margin: 0;
  }

  p {
    text-align: center;
  }
`

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>The resource requested could not be found on this server.</p>
      <Link to="/">Back to homepage.</Link>
    </Wrapper>
  )
}

export default PageNotFound
