import React from 'react'
import styled from 'styled-components'
import Bar from './../../atoms/Bar/Bar'
import ServiceIcon from './../../../assets/icons/ServiceIcon.svg'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SingleService = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;

  img {
    position: absolute;
  }
`

const StyledTitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.18538em;
  margin-left: 20px; ;
`

const StyledInfo = styled.p`
  text-align: justify;
  font-weight: 300;
  padding-left: 40px;
  font-size: 12px;
  line-height: 16px;
`

const Services = () => {
  return (
    <Wrapper>
      <Bar text="Usługi" />
      <motion.div>
        <SingleService>
          <img src={ServiceIcon} alt="Service icon" />
          <StyledTitle>projekt</StyledTitle>
          <StyledInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
            corrupti quia iure dicta.
          </StyledInfo>
        </SingleService>
      </motion.div>
      <SingleService>
        <img src={ServiceIcon} alt="Service icon" />
        <StyledTitle>projekt</StyledTitle>
        <StyledInfo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
          corrupti quia iure dicta.
        </StyledInfo>
      </SingleService>

      <SingleService>
        <img src={ServiceIcon} alt="Service icon" />
        <StyledTitle>projekt</StyledTitle>
        <StyledInfo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
          corrupti quia iure dicta.
        </StyledInfo>
      </SingleService>

      <SingleService>
        <img src={ServiceIcon} alt="Service icon" />
        <StyledTitle>projekt</StyledTitle>
        <StyledInfo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
          corrupti quia iure dicta.
        </StyledInfo>
      </SingleService>
    </Wrapper>
  )
}
export default Services
