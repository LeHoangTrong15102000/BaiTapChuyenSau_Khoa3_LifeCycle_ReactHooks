import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector, useDispatch } from 'react-redux';

const DanhSachQuanCuoc = (props) => {
  // Trong component này chúng ta sẽ hiển thị các quân cược
  // state là state tổng của Reducer
  let danhSachQuanCuoc = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.danhSachCuoc
  );

  // Render ra danh sách cược
  const renderDanhSachCuoc = () => {
    return danhSachQuanCuoc.map((quanCuoc, index) => (
      <div className="col-4 mt-5" key={index}>
        <QuanCuoc quanCuoc={quanCuoc} />
      </div>
    ));
  };

  return (
    <div className="row" style={{ marginTop: 20 }}>
      {renderDanhSachCuoc()}
    </div>
  );
};

export default DanhSachQuanCuoc;
