import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { datCuocAction } from "../../redux/actions/BaiTapGameBauCuaAction";
import { useSpring, useTransition, useTrail, useSprings, animated } from "react-spring";

const QuanCuoc = (props) => {
  // Code giao diện liên quan đến quân cược

  let { quanCuoc } = props;

  // Gửi một cái action lên Redux bằng cách xử lý button đặt cược, truyền vào cái hàm cho nó
  const dispatchQuanCuoc = useDispatch();

  // Sử dụng react-spring để tạo hiệu ứng cho sản phẩm
  const [propsUseSpring, set ,stop] = useSpring(() => ({
    to: { scale: 1.25 },
    from: { scale: 1 },
    reset: true, // sẽ có 1 thuộc tính là reset
  }));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={quanCuoc.hinhAnh} style={{ width: 200, height: 200 }} />

      <div
        className="bg-success mt-2 text-center pb-2"
        style={{ width: 200, borderRadius: "10px" }}
      >
        <animated.button
        style={{transform: propsUseSpring.scale.interpolate(scale => `scale(${scale})`)}}
          
          onClick={() => {
            // trước khi nó dispatch action thì cho tăng cái nút lên
            set({scale: 1})
            set({scale: 1.25})

            dispatchQuanCuoc(datCuocAction(quanCuoc, false));
            //   {
            //   type: 'DAT_CUOC_BAU_CUA',
            //   quanCuoc, // gửi lên chính là quân cược được click
            //   tangGiam: false,
            // }
          }}
          className="btn btn-danger mr-2"
        >
          <i className="fa fa-minus"></i>
        </animated.button>

        <span className="" style={{ color: "yellow", fontSize: 25 }}>
          {quanCuoc.diemCuoc}
        </span>

        <button
          onClick={() => {
            dispatchQuanCuoc(datCuocAction(quanCuoc, true));
          }}
          className="btn btn-danger ml-2"
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default QuanCuoc;
