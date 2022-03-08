import { TodoListDarkTheme } from "../../JSS_StyledComponents/Themes/TodoListDarkTheme";

// Thì ở đây sẽ là nơi mà chúng ta tổ chức Reducer
const TodoListReducer = {
    themeTodoList: TodoListDarkTheme,
    // Demo id theo kiểu chuỗi
    taskList: [
        {id: "task-1",taskName: 'task 1',done: true},
        {id: "task-2",taskName: 'task 2',done: false},
        {id: "task-3",taskName: 'task 3',done: false},
        {id: "task-4",taskName: 'task 4',done: false},
    ],// mặc định là nó chưa có gì hết
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = TodoListReducer, action) => {
  switch (action.type) {

//   case typeName:
//     return { ...state };

  default:
    return {...state}
  }
};
