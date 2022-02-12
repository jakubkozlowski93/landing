import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SingleRealization = styled.div`
  margin-bottom: 40px;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 4;
    padding: 30px 0;
    grid-column-gap: 30px;
  }
`

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
`

export const ImgWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/5;
`

export const StyledDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 121.5%;
  letter-spacing: 0.01em;
  color: #606060;

  @media (min-width: 700px) {
    grid-row: 2/3;
  }
`

export const StyledLink = styled(Link)`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 121.5%;
  letter-spacing: -0.03em;
  text-decoration: underline;
  color: black;

  @media (min-width: 700px) {
    grid-row: 4/5;
  }
`
