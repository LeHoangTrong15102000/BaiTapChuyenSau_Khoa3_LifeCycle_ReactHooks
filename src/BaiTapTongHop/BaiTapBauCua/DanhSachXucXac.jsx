import React, { useState, useEffect } from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

const DanhSachXucXac = (props) => {
  let danhSachXucXac = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.danhSachXucXac
  );

  // Lặp danh sách xúc xắc lấy ra các hình ảnh

  // gửi Action lên Reducer
  let dispatchLacXucXac = useDispatch();

  return (
    <div style={{ marginLeft: 100, marginTop: 150 }}>
      <div
        className="bg-white"
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          paddingLeft: 10,
        }}
      >
        <div className="row">
          <div
            className="col-12 text-center"
            style={{ marginTop: 0, marginLeft: 75 }}
          >
            {/* Do tái sử dụng chung một cái component nên props không thể nào khác nhau được */}
            <XucXac xucXacItem={danhSachXucXac[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-right" style={{ marginTop: -50 }}>
            <XucXac xucXacItem={danhSachXucXac[1]} />
          </div>

          <div className="col-4 text-right" style={{ marginTop: -50 }}>
            <XucXac xucXacItem={danhSachXucXac[2]} />
          </div>
        </div>
      </div>
      <div className="" style={{ marginLeft: '20%' }}>
        <button
          onClick={() => {
            dispatchLacXucXac({
              type: 'XOC_BAU_CUA',
            });
          }}
          className="mt-5 btn btn-success"
          style={{ fontSize: 25, padding: '5px 15px' }}
        >
          Xốc
        </button>
      </div>
    </div>
  );
};

export default DanhSachXucXac;
