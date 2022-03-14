import React from 'react'
import {useSpring, animated} from 'react-spring'

const DemoUseSpring = (props) => {

    const propsAnimation = useSpring({to: {opacity: 1},  from: {opacity: 0} })
  return (
    <animated.div style={propsAnimation}>
        I will fade in
    </animated.div>
  )
}

export default DemoUseSpring