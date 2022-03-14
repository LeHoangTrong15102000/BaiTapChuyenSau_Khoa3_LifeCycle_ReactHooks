import React from "react";
import { useSpring, animated } from "react-spring";

const DemoUseSpring = (props) => {
  // Đó là tìm hiểu về
  const propsAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  const propsAnimation1 = useSpring({
    to: { color_text: "red" },
    from: { color_text: "blue" },
    config: { duration: 2000 },
  });

  // Trên từng thành phần của component ta có thể sử dụng nhiều hooks trên đây

  const propsAniNumber = useSpring({
    to: {num: 200, color: 'red'}, from: {num: 0, color: 'blue'}, config: {duration: 5000}
  })

  // Khai báo cho thuộc tính là scroll top
  const propsAniScroll = useSpring({to: {scroll: 100}, from: {scroll: 0}, config: {duration: 3000}})

  // Có thể sử dụng nhiều animation trên 1 cái thẻ
  

  return (
    <div>
      
      <h1>Change Color Text</h1>
      <animated.div
        style={{
          color: propsAnimation1.color_text,
        }}
      >
        I will fade in
      </animated.div>
      <hr />

      <h1>Change Number</h1>
      <animated.h1 style={{color: propsAniNumber.color}}>
        {propsAniNumber.num}
      </animated.h1>

      {/* <animated.p style={{fontSize: propsAniNumber.num}}>
        1
      </animated.p> */}

      <hr />
      <animated.div scrollTop={propsAniScroll.scroll}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </animated.div>
    </div>
  );
};

export default DemoUseSpring;
