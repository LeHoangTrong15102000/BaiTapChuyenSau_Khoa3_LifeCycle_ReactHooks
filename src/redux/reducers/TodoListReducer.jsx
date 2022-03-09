import { TodoListDarkTheme } from '../../JSS_StyledComponents/Themes/TodoListDarkTheme';
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
} from '../types/TodoListTypes';
import { arrTheme } from '../../JSS_StyledComponents/Themes/ThemeManager';

// Thì ở đây sẽ là nơi mà chúng ta tổ chức Reducer
const TodoListReducer = {
  themeTodoList: TodoListDarkTheme,
  // Demo id theo kiểu chuỗi
  taskList: [
    { id: 'task-1', taskName: 'task 1', done: true },
    { id: 'task-2', taskName: 'task 2', done: false },
    { id: 'task-3', taskName: 'task 3', done: false },
    { id: 'task-4', taskName: 'task 4', done: false },
  ], // mặc định là nó chưa có gì hết
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = TodoListReducer, action) => {
  switch (action.type) {
    //   case typeName:
    //     return { ...state };

    // Xử lý action addTask
    case add_task: {
      // console.log('todo', action.newTask);
      // Bây giờ hiện cái newTask ra giao diện màn hình
      if (action.newTask.taskName.trim() === '') {
        alert('Chưa có nội dung nào cho task mới!!');
        return { ...state }; // thì return lại cho nó cái task cũ
      }
      // Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];

      // Kiểm tra nếu task thêm vào trùng tên với task đã có trong Store
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      // Nếu có trùng thì hiện ra thông báo cảnh báo
      if (index !== -1) {
        alert('Đã có task này trong Todo List!!');
        // Kiểm tra xong thì trả lại cái state task cũ
        return { ...state };
      }

      // Nếu nó chưa tồn tại tên task thì mới add vào mảng task mới
      // kiểm tra xong xuôi thì gán lại task mới
      state.taskList = [...taskListUpdate, action.newTask];
      return { ...state };
    }

    // Xử lý change theme
    case change_theme: {
      // Sau khi nhấn vào nó gửi cái mã value ra rồi thì muốn change được cái theme đó thì tìm ra cái theme có cái id trùng với id trong arrTheme
      // Phải sử dụng 2 đấu bằng vì mặc định "value" nó gửi lên cho mình là chuỗi
      let themeObj = arrTheme.find((theme) => theme.id == action.themeId);
      // Nếu cái theme đó tồn tại thì
      if (themeObj) {
        // state.themeTodoList = theme; // gán bằng cái theme mà click vào được, Nếu mà gán như vậy thì nó chỉ thay đổi được có một lần thôi vì nó là kiểu dữ liệu object ghi như vậy thì buồn nhớ không thay đổi

        state.themeTodoList = { ...themeObj.theme };
      }
      return { ...state };

      // console.log(action);
    }

    // Xử lý done task
    case done_task: {
      // console.log('done_task', action);
      // Tạo ra taskListUpdate chứa danh sách các task chưa done còn các task đã done thì chuyển nó xuống bên dưới
      let taskListUpdate = [...state.taskList];
      // Tìm ra task cần để done
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate.splice(index, 1);
      }

      state.taskList = taskListUpdate;
      return { ...state };
    }

    // Xử lý delete task
    case delete_task: {
      return { ...state };
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
