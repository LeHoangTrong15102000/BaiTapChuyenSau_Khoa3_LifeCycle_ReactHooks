import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DiemThuongCuoc = (props) => {
  let diemThuong = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.tongDiemThuong
  );

  return (
    <div className="">
      <h3
        style={{ color: 'green', marginTop: '0px' }}
        className=" text-center display-4"
      >
        Game Bầu Cua CyberSoft
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: '25px', borderRadius: '10px' }}
          className="p-3 text-white bg-secondary"
        >
          Tiền thưởng:{' '}
          <span className="text-warning">{diemThuong.toLocaleString()}$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          style={{ fontSize: '20px', borderRadius: '10px', border: 'none' }}
          className="p-3 text-white bg-info"
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
};

export default DiemThuongCuoc;
