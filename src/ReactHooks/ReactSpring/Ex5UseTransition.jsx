import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useTransition, useSpring, useTrail, animated } from "react-spring";

const Ex5UseTransition = (props) => {
  let [arrItems, setArrItem] = useState([
    { id: 1, title: "FrontEndDeveloper", content: "CyberLearn" },
    { id: 2, title: "FrontEndOnline", content: "CyberSoft" },
    { id: 3, title: "FrontEndOffline", content: "CyberLap" },
    { id: 4, title: "FrontEndAndFullStack", content: "CyberFantasic" }
  ])

  // Định nghĩa một transition
  const propsUseTransition = useTransition(arrItems, item => item.id, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
    config: {duration: 1000}
  })

  // Sau khi tạo ra  cái propsUseTransition tiếp theo sẽ gắn animation vào cái hàm render

  // Đầu tiên sẽ lặp cái mảng này ra trên giao diện
  let renderItem = () => {
    return propsUseTransition.map(({item, props, index}) => {
      // thành phần thứ 1 là giá trị của item, thành phần thứ 2 là propsAnimation của thz transition, thành phần thứ 3 là key chạy từ "item.id"
      return (
        <animated.div
          style={props}
          key={index}
          className="bg-dark text-white p-3 mt-2"
        >
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };

  return <div className="container">{renderItem()}</div>;
};

export default Ex5UseTransition;
