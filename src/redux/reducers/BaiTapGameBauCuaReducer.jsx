const stateDefault = {
  // DanhSachCuoc
  danhSachCuoc: [
    // tạo ra 6 phần tử ban đầu có sẵn cho nó luôn
    { id: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { id: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { id: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { id: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { id: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { id: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],

  // Điểm thưởng mỗi khi thắng hoặc thua
  tongDiemThuong: 1000,

  // mặt bầu cua mỗi lần xốc, chứa các mặt của xúc xắc bầu cua
  // Sau khi demo xong thì mỗi lần xốc thì push nó vào cái mảng này
  danhSachXucXac: [
    { id: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
    { id: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { id: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ],
};
// Sao đó có thể làm những việc gì nhỉ

// eslint-disable-next-line import/no-anonymous-default-export
const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default BaiTapGameBauCuaReducer;
