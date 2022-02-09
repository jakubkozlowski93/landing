import React, { useEffect } from 'react'
import styled from 'styled-components'
import Bar from './../../atoms/Bar/Bar'
import ServiceIcon from './../../../assets/icons/ServiceIcon.svg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
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
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const animationFromLeft = useAnimation()

  useEffect(() => {
    if (inView) {
      animationFromLeft.start(i => ({
        x: 0,
        transition: { delay: i * 0.2, type: 'stiffness', duration: 1, bounce: 0.3 },
      }))
    }
    if (!inView) {
      animationFromLeft.start({
        x: '-100vh',
      })
    }
  }, [inView])

  return (
    <Wrapper ref={ref}>
      <Bar text="Usługi" />
      <motion.div custom={0} animate={animationFromLeft}>
        <SingleService>
          <img src={ServiceIcon} alt="Service icon" />
          <StyledTitle>projekt</StyledTitle>
          <StyledInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
            corrupti quia iure dicta.
          </StyledInfo>
        </SingleService>
      </motion.div>

      <motion.div custom={1} animate={animationFromLeft}>
        <SingleService>
          <img src={ServiceIcon} alt="Service icon" />
          <StyledTitle>projekt</StyledTitle>
          <StyledInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
            corrupti quia iure dicta.
          </StyledInfo>
        </SingleService>
      </motion.div>

      <motion.div custom={2} animate={animationFromLeft}>
        <SingleService>
          <img src={ServiceIcon} alt="Service icon" />
          <StyledTitle>projekt</StyledTitle>
          <StyledInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
            corrupti quia iure dicta.
          </StyledInfo>
        </SingleService>
      </motion.div>

      <motion.div custom={3} animate={animationFromLeft}>
        <SingleService>
          <img src={ServiceIcon} alt="Service icon" />
          <StyledTitle>projekt</StyledTitle>
          <StyledInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
            corrupti quia iure dicta.
          </StyledInfo>
        </SingleService>
      </motion.div>
    </Wrapper>
  )
}
export default Services
