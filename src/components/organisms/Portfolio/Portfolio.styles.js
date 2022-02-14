import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    padding: 0 100px;
  }

  @media (min-width: 1400px) {
    padding: 0 200px;
  }

  @media (min-width: 1550px) {
    padding: 0 400px;
  }
`

export const SingleRealization = styled.div`
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 4;
    padding: 30px 0;
    grid-column-gap: 30px;
    border-bottom: 1px solid black;
  }
`

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
  grid: 1/2;
  grid-column: 1/2;

  @media (min-width: 700px) {
    padding-bottom: 0;
  }

  @media (min-width: 1000px) {
    font-size: 25px;
  }
`

export const FirstDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 131.5%;
  letter-spacing: 0.01em;
  color: #606060;
  grid: 2/3;
  grid-column: 1/2;
  font-weight: 600;

  @media (min-width: 1200px) {
    margin: 0;
  }

  @media (min-width: 1000px) {
    font-size: 17px;
  }
`

export const SecondDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 121.5%;
  letter-spacing: 0.01em;
  color: #606060;
  margin: 0 0 30px 0;
  font-size: 13px;

  @media (min-width: 1000px) {
    font-size: 15px;
  }
`

export const ImgWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/5;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.03em;
  text-decoration: underline;
  color: black;
  grid-column: 1/2;

  @media (min-width: 700px) {
    grid-row: 4/5;
  }

  @media (min-width: 100px) {
    font-size: 20px;
  }
`
