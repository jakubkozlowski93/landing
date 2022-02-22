import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px 50px 40px 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 3;
    grid-template-rows: 6;
    column-gap: 50px;
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1300px) {
    padding: 100px 0px;
    margin: 0 auto;
    width: 70%;
  }

  @media (min-width: 1600px) {
    width: 60%;
  }
`

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 1000px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`

export const ImgWrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1000px) {
    grid-row: 1/5;
    grid-column: 2/4;
    justify-self: end;
    max-width: 600px;
    max-height: 375px;
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

  @media (min-width: 600px) {
    margin: 30px 0;
  }

  @media (min-width: 1000px) {
    grid-row: 2/3;
    grid-column: 1/2;
    margin: 0;
    justify-self: center;
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
  font-weight: 500;
  text-align: justify;

  @media (min-width: 1000px) {
    grid-row: 3/4;
    grid-column: 1/2;
    margin-top: 10px;
  }
`

export const Carousel2 = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    grid-row: 5/6;
    grid-column: 1/4;
    width: 100%;
    height: 250px;
    margin-top: 40px;
    overflow: hidden;
    padding: 0 0 40px 0;
  }

  div {
    background: white;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    img {
      display: block;
      margin: 0 5px;
      height: 100%;
      width: 100%;
    }
  }
`

export const AdditionalDescription = styled(SecondDescription)`
  @media (min-width: 1000px) {
    display: block;
    grid-row: 6/7;
    grid-column: 1/4;
    margin-top: 50px;
  }
`

export const BackHomeWrapper = styled.div`
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`
