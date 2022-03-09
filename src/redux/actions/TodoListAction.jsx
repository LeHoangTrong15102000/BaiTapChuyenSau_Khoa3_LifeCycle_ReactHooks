import {
  add_task,
  change_theme,
  done_task,
  delete_task,
} from '../types/TodoListTypes';

// file này chứa rất nhiều action dispatch lên reducer
export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask,
});

export const changeThemeAction = (themeId) => ({
  type: change_theme,
  themeId, // này là action gửi lên store của Redux
});

export const doneTaskAction = (taskId) => ({
  type: done_task,
  taskId,
});

export const deleteTaskAction = (taskId) => ({
  type: delete_task,
  taskId,
});

// cái mà mình muốn gửi lên là một cái task để chúng ta push vào mảng taskList
