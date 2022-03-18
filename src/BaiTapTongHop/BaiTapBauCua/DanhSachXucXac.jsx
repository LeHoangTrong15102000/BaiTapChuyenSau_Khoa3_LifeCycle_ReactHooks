import React from "react";

const DanhSachXucXac = () => {
  return (
    <div style={{ marginLeft: 100, marginTop: 150 }}>
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: "50%" }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: 100 }}>
            <img
              src="./img/BaiTapGameBauCua/bau.png"
              style={{ width: 30, height: 30 }}
              alt="picture123"
            />
          </div>
          <div className="col-6 text-right" style={{ marginTop: 20 }}>
            <img
              src="./img/BaiTapGameBauCua/cua.png"
              style={{ width: 30, height: 30 }}
              alt="picture123"
            />
          </div>
            
          <div className="col-6 text-left" style={{ marginTop: 20 }}>
            <img
              src="./img/BaiTapGameBauCua/ca.png"
              style={{ width: 30, height: 30 }}
              alt="picture123"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default DanhSachXucXac;
