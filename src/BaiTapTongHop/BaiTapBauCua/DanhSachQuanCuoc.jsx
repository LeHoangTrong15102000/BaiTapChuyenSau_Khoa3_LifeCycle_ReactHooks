import React from 'react';
import QuanCuoc from './QuanCuoc';

const DanhSachQuanCuoc = () => {
  // Trong component này chúng ta sẽ hiển thị các quân cược
  return <div className="row" style={{ marginTop: 50}}>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
    <div className="col-4 mt-5">
      <QuanCuoc />
    </div>
  </div>;
};

export default DanhSachQuanCuoc;
