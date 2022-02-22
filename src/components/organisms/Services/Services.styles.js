import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  /* @media (min-width: 1000px) {
    margin: 60px 0;
  } */
`

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 2;
    grid-auto-flow: row;
    column-gap: 50px;
  }
`

export const SingleService = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 40px 0 30px;

  img {
    position: absolute;
  }

  @media (min-width: 1000px) {
    width: 400px;
    padding: 25px 0;
  }
`

export const StyledTitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.18538em;
  margin-left: 20px;

  @media (min-width: 850px) {
    font-size: 20px;
  }
`

export const StyledInfo = styled.p`
  text-align: justify;
  font-weight: 300;
  padding-left: 40px;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 850px) {
    font-size: 14px;
  }
`
