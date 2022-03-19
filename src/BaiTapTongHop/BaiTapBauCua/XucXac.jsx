import React, { Fragment, useState, useEffect, useCallback } from "react";
import {useSelector, useDispatch} from 'react-redux'

const XucXac = (props) => {
  // Để cái thẻ Fragment(cái thẻ mà không thực sự có trên giao diện)
  let { xucXacItem } = props;

  // Gửi action lên Reducer
  
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            src={xucXacItem.hinhAnh}
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
          <img
            className="ml-3 cube__face back"
            src="./img/BaiTapGameBauCua/bau.png"
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
          <img
            className="ml-3 cube__face top"
            src="./img/BaiTapGameBauCua/cua.png"
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
          <img
            className="ml-3 cube__face bottom"
            src="./img/BaiTapGameBauCua/ca.png"
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
          <img
            className="ml-3 cube__face right"
            src="./img/BaiTapGameBauCua/nai.png"
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
          <img
            className="ml-3 cube__face left"
            src="./img/BaiTapGameBauCua/tom.png"
            style={{ width: 50, height: 50 }}
            alt="picture123"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default XucXac;
