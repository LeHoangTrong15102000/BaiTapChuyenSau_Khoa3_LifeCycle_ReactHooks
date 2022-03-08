import logo from './logo.svg';
import './App.css'; 
import DemoTheme from './JSS_StyledComponents/Themes/DemoTheme'
import TodoList from './JSS_StyledComponents/BaiTapStyleComponent/TodoList/TodoList';

function App() {
  return (

    // ************************ BaiTap TodoList
    <div>
      <TodoList />
    </div>

    // ********************** Demo Theme
    // <div>
    //   <DemoTheme />
    // </div>
  );
}

export default App;
