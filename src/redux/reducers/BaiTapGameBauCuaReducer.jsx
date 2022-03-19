const stateDefault = {
  // DanhSachCuoc
  danhSachCuoc: [
    // tạo ra 6 phần tử ban đầu có sẵn cho nó luôn
    { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],

  // Điểm thưởng mỗi khi thắng hoặc thua
  tongDiemThuong: 1000,

  // mặt bầu cua mỗi lần xốc, chứa các mặt của xúc xắc bầu cua
  // Sau khi demo xong thì mỗi lần xốc thì push nó vào cái mảng này
  danhSachXucXac: [
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ],
};
// Sao đó có thể làm những việc gì nhỉ

// eslint-disable-next-line import/no-anonymous-default-export
const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
      // Tìm đúng quân cược mà click vào thì tăng điểm quân cược đó lên

      const danhSachCuocUpdate = [...state.danhSachCuoc];
      let index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        // Nếu mà click vào đúng quân cược được chọn thì
        if (action.tangGiam) {
          if (state.tongDiemThuong > 0) {
            // tangGiam bằng true
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiemThuong -= 100; // do là kiểu dữ liệu nguyên thủy nên có thể gán trực tiếp được
          } 
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            // tangGiam bằng false
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiemThuong += 100;
          }
          
        }
      }

      // gán lại cái danhSachCuocUpdate
      state.danhSachCuoc = danhSachCuocUpdate;

      // Sau khi xử lý xong cuối cùng là cập nhật là state của Redux
      return { ...state };
    }

    case  'XOC_BAU_CUA' : {
      
      return {...state}
    }
    default:
      return state;
  }
};

export default BaiTapGameBauCuaReducer;
