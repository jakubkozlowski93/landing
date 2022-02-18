import React, { useEffect, useState } from 'react'
import { Wrapper, Container, SingleService, StyledTitle, StyledInfo } from './Services.styles'
import Bar from './../../atoms/Bar/Bar'
import ServiceIcon from './../../../assets/icons/ServiceIcon.svg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [isFinished, setIsFinished] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const animationFromLeft = useAnimation()

  useEffect(() => {
    if (inView) {
      animationFromLeft.start(i => ({
        x: '0',
        transition: { delay: i * 0.2, type: 'stiffness', duration: 1, bounce: 0.3 },
      }))
      setIsFinished(true)
    }
    if (!inView && isFinished !== true) {
      animationFromLeft.start({
        x: '-100vw',
      })
    }
  }, [inView, isFinished])

  return (
    <Wrapper ref={ref} id="services">
      <Bar text="Usługi" />
      <Container>
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

        <motion.div custom={4} animate={animationFromLeft}>
          <SingleService>
            <img src={ServiceIcon} alt="Service icon" />
            <StyledTitle>projekt</StyledTitle>
            <StyledInfo>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, expedita ab aliquam atque consequuntur id possimus, eum quod incidunt
              corrupti quia iure dicta.
            </StyledInfo>
          </SingleService>
        </motion.div>
      </Container>
    </Wrapper>
  )
}
export default Services
