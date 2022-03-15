import React, {useState, useEffect} from 'react'
import {useTrail, useSpring, useSprings,animated} from 'react-spring'
import { useSelector, useDispatch} from 'react-redux'


// khai báo một cái item
const items = [
    {title: 'FrontEndDeveloper', content:'CyberLearn'}, 
    {title: 'FrontEndOnline', content: 'CyberSoft'},
    {title: 'FrontEndOffline', content: 'CyberLap'}
];

const Ex4UseTrail = () => {

    let [status, setStatus] = useState(true); // mặc định cho nó là true

    // thz Trail này nó thiết kếm một cái spring cho tất cả phần tử
    const propsUseTrail = useTrail(items.length,{
  
        opacity: status? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
      }) 
  return (
    <div>
        {propsUseTrail.map((propsUseSpring, index) => (
            <animated.h1 key={index} style={propsUseSpring}></animated.h1>
        ))}
    </div>
  )
}

export default Ex4UseTrail