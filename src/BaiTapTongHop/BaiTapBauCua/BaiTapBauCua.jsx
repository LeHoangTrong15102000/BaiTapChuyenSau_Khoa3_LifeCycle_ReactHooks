import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, useTransition } from 'react-spring';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import DiemThuongCuoc from './DiemThuongCuoc';
import './BaiTapGameBauCua.css';

const BaiTapBauCua = () => {
  return (
    <div id="BaiTapGameBauCua" className="container-fluid">
      <DiemThuongCuoc />

      <div className="row">
        <div className="col-8" style={{ marginTop: 'none' }}>
          <DanhSachQuanCuoc />
        </div>

        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
};

export default BaiTapBauCua;
