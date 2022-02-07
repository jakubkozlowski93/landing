import styled from 'styled-components'

export const StyledLogo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: ${({ isScrolled }) => (isScrolled ? `rgb(243, 243, 243)` : `#242635`)};
`
