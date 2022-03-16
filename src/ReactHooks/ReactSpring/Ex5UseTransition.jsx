import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  useTransition,
  animated,
  useSpring,
  useTrail,
  useSprings,
} from 'react-spring';

const Ex5UseTransition = (props) => {
  let [arrItems, setArrItem] = useState([
    { key: 1, title: 'FrontEndDeveloper', content: 'CyberLearn' },
    { key: 2, title: 'FrontEndOnline', content: 'CyberSoft' },
    { key: 3, title: 'FrontEndOffline', content: 'CyberLap' },
    { key: 4, title: 'FrontEndAndFullStack', content: 'CyberFantasic' },
  ]);

  // Định nghĩa một transition
  const propsUseTransition = useTransition(arrItems, (item) => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { duration: 1000 },
  });

  // Sau khi tạo ra  cái propsUseTransition tiếp theo sẽ gắn animation vào cái hàm render

  // Đầu tiên sẽ lặp cái mảng này ra trên giao diện
  let renderItem = () => {
    return propsUseTransition.map(({ props, item, index }) => {
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

  return (
    <div className="container">
      {renderItem()}
      <div className="form-group">
        <h3>Title</h3>
        <input type="text" name="title" className="form-control" />
      </div>
    </div>
  );
};

export default Ex5UseTransition;
