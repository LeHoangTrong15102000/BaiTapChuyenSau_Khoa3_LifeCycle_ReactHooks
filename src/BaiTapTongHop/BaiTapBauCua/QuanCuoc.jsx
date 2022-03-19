import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const QuanCuoc = (props) => {
  // Code giao diện liên quan đến quân cược

  let { quanCuoc } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={quanCuoc.hinhAnh} style={{ width: 200, height: 200 }} />

      <div
        className="bg-success mt-2 text-center pb-2"
        style={{ width: 200, borderRadius: '10px' }}
      >
        <button className="btn btn-danger mr-2">
          <i className="fa fa-minus"></i>
        </button>
        <span className="" style={{ color: 'yellow', fontSize: 25 }}>
          {quanCuoc.diemCuoc}
        </span>
        <button className="btn btn-danger ml-2">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default QuanCuoc;
