import styled from 'styled-components'

export const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  margin: 0;
  padding: 0;

  li {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #242635;
    text-transform: capitalize;
    padding: 20px 0;
    cursor: pointer;
    text-align: center;
  }
`
