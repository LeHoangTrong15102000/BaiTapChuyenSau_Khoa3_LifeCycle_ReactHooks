import { TodoListDarkTheme } from '../../JSS_StyledComponents/Themes/TodoListDarkTheme';
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  restore_task,
  update_task,
} from '../types/TodoListTypes';
import { arrTheme } from '../../JSS_StyledComponents/Themes/ThemeManager';
import { bindActionCreators } from 'redux';

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

  taskEdit: { id: '-1', taskName: '', done: false }, // thì taskEdit nó cũng chứa những thuộc tính giống như taskList
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
      // Click vào button Done Check => thì nó sẽ dispatch lên 1 cái action có taskId
      let taskListUpdate = [...state.taskList];
      // Tìm ra task cần để done
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        // Gán thuộc tính done của Task thành true để nó di chuyển xuống task Completed
        taskListUpdate[index].done = true;
      }
      // Cuối cùng là gán lại taskListUpdate sau khi cập nhật thành công
      // state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }

    // Có thể làm thêm chức năng Refresh lại done -> chuyển thành false thì nó sẽ lên lại
    // Xử lý delete task
    case delete_task: {
      // console.log(action.taskId)
      // Đầu tiên cũng tạo ra một taskListUpdate
      // let taskListUpdate = [...state.taskList]
      // Tìm ra task cần để delete trong Todo
      // let index = taskListUpdate.findIndex(task => task.id === action.taskId);
      // if (index !== -1) {
      //   taskListUpdate.splice(index, 1);
      // }
      // Có thể dùng hàm filter để xóa phần tử trong mảng
      // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);// lấy ra cái mảng mới không còn thằng có id được click vào nữa

      // cập nhật lại state sau khi xóa khỏi mảng
      // return { ...state, taskList:  taskListUpdate };

      // Chúng ta có thể viết chuyên nghiệp hơn với 1 dòng duy nhất
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }

    // Xử lý Restore task
    case restore_task: {
      // Cũng Clone cái mảng ra để có thể thêm lại vào
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      if (index !== -1) {
        taskListUpdate[index].done = false; // Nếu mà tìm ra thì biến nó lại  thành false
      }
      // console.log("Restore", action.taskId)
      return { ...state, taskList: taskListUpdate }; // cuối cùng là cập nhật lại state của Redux

      // Viết code với 1 dòng để nhìn cho nó chuyên nghiệp
    }

    // Xử lý Edit task
    case edit_task: {
      // console.log(action.taskId)
      // task truyền vào là một object luôn để khi mà có sự thay đổi thì thằng value nó sẽ lấy về taskName từ task
      return { ...state, taskEdit: action.task };
    }

    // Xử lý upload task
    case update_task: {
      // Bắt được sự kiện rồi thì gán taskName cho task Edit, cập nhật lai taskName trong taskEdit
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      // Rồi tìm trong thằng taskList thằng nào có id trùng với thằng đang sửa thì cập nhập lại taskName đồng thời giữ nguyên id
      let taskListUpdate = [...state.taskList];
      // Tìm trong taskLsit cập nhật lại taskList dựa vào taskEdit người dùng update
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );

      if (index !== -1) {
        // thì mới gán lại taskEdit cho taskList
        taskListUpdate[index] = state.taskEdit;
      }
      state.taskList = taskListUpdate;
      // Chỉnh sửa xong rồi thì chúng ta can thiệp
      state.taskEdit = { id: '-1', taskName: '', done: false };

      // Cuối cùng là cập nhật lại state
      return { ...state };
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
