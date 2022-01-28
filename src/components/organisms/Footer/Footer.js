import React from 'react'
import styled from 'styled-components'
import FacebookIcon from './../../../assets/icons/FacebookIcon.svg'
import LinkedInIcon from './../../../assets/icons/LinkedInIcon.svg'
import InstagramIcon from './../../../assets/icons/InstagramIcon.svg'

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;

    li {
      padding: 0 20px;
      width: 100%;
      color: #242635;
    }
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <img src={FacebookIcon} alt="Facebook icon" />
        </li>
        <li>
          <img src={LinkedInIcon} alt="LinkedIn icon" />
        </li>
        <li>
          <img src={InstagramIcon} alt="Instagram Icon" />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Footer