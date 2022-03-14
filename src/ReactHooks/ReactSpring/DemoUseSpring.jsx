import React from 'react';
import { useSpring, animated } from 'react-spring';

const DemoUseSpring = (props) => {
  // Đó là tìm hiểu về
  const propsAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  const propsAnimation1 = useSpring({
    to: { color_text: 'red' },
    from: { color_text: 'blue' },
    config: { duration: 2000 },
  });
  return (
    <animated.div
      style={{
        color: propsAnimation1.color_text,
      }}
    >
      I will fade in
    </animated.div>
  );
};

export default DemoUseSpring;
