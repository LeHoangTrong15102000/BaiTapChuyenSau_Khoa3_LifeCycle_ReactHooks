import React from 'react';
import { useSpring } from 'react-spring';

const Ex2UseSpring = (props) => {
  let propsUseSpring = useSpring({
    to: { color: [131, 111, 255] },
    from: { color: [238, 99, 99] },
  });
  return <div>Ex2UseSpring</div>;
};

export default Ex2UseSpring;
