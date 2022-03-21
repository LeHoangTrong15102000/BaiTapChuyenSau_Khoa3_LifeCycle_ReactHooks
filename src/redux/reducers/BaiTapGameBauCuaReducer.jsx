import {
  CHOI_LAI_BAU_CUA,
  DAT_CUOC_BAU_CUA,
  XOC_BAU_CUA,
} from '../types/BaiTapGameBauCuaTypes';

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
  // Sau mỗi lần random thì sẽ lấy một con xúc xắc ở mảng để truyền vào
  danhSachXucXac: [
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ],
};

const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_CUOC_BAU_CUA: {
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

    case XOC_BAU_CUA: {
      // **************************** Random ra 3 con xúc xắc ngầu nhiên từ mảng 6 con xúc xắc
      // lấy ra item mảng các con xúc xắc
      const mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        // lấy ra 3 con xúc xắc nên lặp qua 3 lần
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // cập nhật lại danh sách xúc xắc sau khi đã random ngẫu nhiên xúc xắc
      state.danhSachXucXac = mangXucXacNgauNhien;

      // **************************** Tiến hành so sánh để trả thưởng tiền cược và hoàn tiền cược lại
      // Duyệt mảng xúc xắc ngẫu nhiên vừa mới tạo ra, có thể duyệt bằng for hoặc dùng map để duyệt điều được(vì map sẽ giúp chúng ta trả về một cái mảng), dùng forEach cũng được(forEach chỉ giúp mình duyệt cái mảng)
      // for (let i = 0; i < mangXucXacNgauNhien.length; i++) {}
      mangXucXacNgauNhien.forEach((xucXacNN, index) => {
        // mỗi lần duyệt xem trong danhSachCuoc có chứa qc === qcXXNN không
        let indexDSCuoc = state.danhSachCuoc.findIndex(
          (xucXac) => xucXac.ma === xucXacNN.ma
        );
        if (indexDSCuoc !== -1) {
          // Lấy tổng diểm tổng cho cái điểm cược
          state.tongDiemThuong += state.danhSachCuoc[indexDSCuoc].diemCuoc;
        }
        // => Vậy là xong bước cộng điểm mỗi khi có quanCuoc trung với qc trong danhSachCuoc
      });
      // ****************************** Xử lý nghiệp vụ hoàn tiền lại hoặc là trừ tiền đi luôn(Nếu QC nào trùng với QC trong DSXX)
      // Duyệt mảng DSQuanCuoc
      state.danhSachCuoc.forEach((quanCuoc, index) => {
        // Tìm ra index của viên XX, coi có trùng với id của QC trong mảng XX hay không
        let indexXucXac = mangXucXacNgauNhien.findIndex(
          (xucXac) => xucXac.ma === quanCuoc.ma
        );
        if (indexXucXac !== -1) {
          // Nếu có hoàn tiền lại
          state.tongDiemThuong += quanCuoc.diemCuoc;
        }
      });

      // ****************************** Xử lý nghiệp vụ làm mới lại mangDanhSachQuanCuoc => phải dùng hàm map thì nó mới biết là trả về mảng giá trị mới, còn forEach thì chỉ duyệt ko trả lại mảng mới
      let danhSachCuocRenew = state.danhSachCuoc.map((quanCuoc, index) => {
        // phải cho cái mảng chứa các đối tượng mới
        // quanCuoc.diemCuoc = 0; // để như vậy thì nó chỉ biết là các phần tử bên trong con thay đổi thì nó sẽ không thay đổi
        return { ...quanCuoc, diemCuoc: 0 }; // lặp trong moảng thì phải trả về mảng các phần tử trong mảng
      });
      // Sau khi gán về 0 thì cập nhật lại danh sách cược(diemCuoc: 0)
      state.danhSachCuoc = danhSachCuocRenew;

      // Cuối cùng là trả về cái state mới sau khi đã thực hiện các thao tác xử lý
      return { ...state };
    }

    case CHOI_LAI_BAU_CUA: {
      state.tongDiemThuong = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
        return { ...quanCuoc, diemCuoc: 0 };
      });
      return { ...state };
    }

    default:
      return state;
  }
};

export default BaiTapGameBauCuaReducer;
