import React from 'react';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import DiemThuongCuoc from './DiemThuongCuoc';
import './BaiTapGameBauCua.css';
import { rgb } from '@react-spring/shared';

const BaiTapBauCua = () => {
  return (
    <div id="BaiTapGameBauCua" className="container-fluid">
      <DiemThuongCuoc />

      <div className="row">
        <div className="col-8">
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
