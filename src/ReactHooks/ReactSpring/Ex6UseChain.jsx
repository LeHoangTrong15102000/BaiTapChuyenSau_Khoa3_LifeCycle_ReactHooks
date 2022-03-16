import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  useSpring,
  useTrail,
  useTransition,
  useChain,
  animated,
} from "react-spring";

const Ex6UseChain = () => {
  // Tạo ra 1 Spring
  let springRef = useRef();
  const propsAnim = useSpring({
    to: { opacity: 1, width: "100%", height: "100%" },
    from: { opacity: 0, width: "0%", height: "0%" },
    config: { duration: 1000 },
    ref: springRef,
  });

  // Tạo ra 1 state chứa các giá trị ban đầu của transition
  let [arrContent, setArrContent] = useState([
    { id: 1, title: "FrontEndDeveloper", content: "CyberLearn" },
    { id: 2, title: "FrontEndOnline", content: "CyberSoft" },
    { id: 3, title: "FrontEndOffline", content: "CyberLap" },
    { id: 4, title: "FrontEndAndFullStack", content: "CyberFantasic" },
  ]);

  // tạo 1 transition
  let transitionRef = useRef();
  const transitions = useTransition(arrContent, (item) => item.id, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
      width: "100%",
      height: "100%",
    },
    leave: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
      width: "100%",
      height: "0%",
    },
    config: { duration: 500 },
    ref: transitionRef,
  });

  // Kết hợp 2 useSpring
  useChain([springRef, transitionRef, [0, 0.5 ]]);

  return (
    <div className="container">
      <animated.div style={propsAnim}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={props}
            className="mt-2 mb-2 bg-dark p-3 text-white text-center"
          >
            <div className="text-right">
              <button
                className="btn btn-danger"
                onClick={() => {
                  setArrContent([
                    ...arrContent.filter((article) => article.id !== item.id),
                  ]);
                }}
              >X</button>
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Ex6UseChain;
