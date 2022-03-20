import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { datCuocAction } from '../../redux/actions/BaiTapGameBauCuaAction';

const QuanCuoc = (props) => {
  // Code giao diện liên quan đến quân cược

  let { quanCuoc } = props;

  // Gửi một cái action lên Redux bằng cách xử lý button đặt cược, truyền vào cái hàm cho nó
  const dispatchQuanCuoc = useDispatch();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={quanCuoc.hinhAnh} style={{ width: 200, height: 200 }} />

      <div
        className="bg-success mt-2 text-center pb-2"
        style={{ width: 200, borderRadius: '10px' }}
      >
        <button
          onClick={() => {
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
        </button>
        <span className="" style={{ color: 'yellow', fontSize: 25 }}>
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
