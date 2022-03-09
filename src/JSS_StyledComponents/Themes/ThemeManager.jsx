import { TodoListDarkTheme } from './TodoListDarkTheme';
import { TodoListLightTheme } from './TodoListLightTheme';
import { TodoListPrimaryTheme } from './TodoListPrimaryTheme';

// quản lí themes này sẽ là một cái array để chứa các theme được quản lí
// Bất cứ khi nào có cái theme mới thì import vào đây để quản lí hết
export const arrTheme = [
  {
    id: 1,
    name: 'Dark theme',
    theme: TodoListDarkTheme,
  },
  {
    id: 2,
    name: 'Light theme',
    theme: TodoListLightTheme,
  },
  {
    id: 3,
    name: 'Primary theme',
    theme: TodoListPrimaryTheme,
  },
];
