import { ADD_COMMENT } from '../types/FakeBookTypes';

// Cái parameter trong ngoặc là cái dùng để gửi lên store của Redux
export const addCommentAction = (userComment) => ({
  type: ADD_COMMENT,
  userComment,
});
