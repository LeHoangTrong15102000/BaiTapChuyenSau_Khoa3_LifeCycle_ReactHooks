import {
  CHOI_LAI_BAU_CUA,
  DAT_CUOC_BAU_CUA,
  XOC_BAU_CUA,
} from '../types/BaiTapGameBauCuaTypes';

// cái tên biến ở đây truyên lên phải cần phải nhớ để khi vào Reducer còn gọi ra cho giống
export const datCuocAction = (quanCuoc, tangGiam) => ({
  type: DAT_CUOC_BAU_CUA,
  quanCuoc,
  tangGiam,
});

export const xocBauCuaAction = () => ({
  type: XOC_BAU_CUA,
});

export const playAgainAction = () => ({
  type: CHOI_LAI_BAU_CUA,
});
