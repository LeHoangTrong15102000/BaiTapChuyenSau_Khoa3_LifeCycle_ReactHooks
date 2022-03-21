import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated, useTrail } from "react-spring";

const XucXac = (props) => {
  // Để cái thẻ Fragment(cái thẻ mà không thực sự có trên giao diện)
  let { xucXacItem } = props;

  // Gửi action lên Reducer
  let [propsDice, setDice] = useSpring(() => ({
    to: {
      xyz: [720,720,720],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: { duration: 500 },
    reset: true, // để mỗi lần thực hiện animation thì nó sẽ tự động render lại animation cho mình để có thể nhấn lần kế tiếp
  }));

  // Component render lại tuy nhiên animation không render lại, cứ mỗi lần component render lại thì nó sẽ chạy xuống thằng set để set lại animation cho chúng ta
  setDice({ xyz: [720,720,720] });
  return (
    <Fragment>
      <div className="scene" style={{marginLeft: 50}}>
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.interpolate(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg)  rotateY(${y}deg) rotateZ(${z}deg) `
            ),
          }}
        >
          <div className="cube__face front">
            <img
              src={xucXacItem.hinhAnh}
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>
          <div className="cube__face back">
            <img
              src="./img/BaiTapGameBauCua/bau.png"
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>

          <div className="cube__face right">
            <img
              src="./img/BaiTapGameBauCua/cua.png"
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>
          <div className="cube__face left">
            <img
              src="./img/BaiTapGameBauCua/ca.png"
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>
          <div className="cube__face top">
            <img
              src="./img/BaiTapGameBauCua/nai.png"
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>
          <div className="cube__face bottom">
            <img
              src="./img/BaiTapGameBauCua/tom.png"
              style={{ width: "100%" }}
              alt="picture123"
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
};

export default XucXac;
