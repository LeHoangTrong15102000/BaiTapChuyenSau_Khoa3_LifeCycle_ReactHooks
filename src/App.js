import logo from './logo.svg';
import './App.css';
import DemoTheme from './JSS_StyledComponents/Themes/DemoTheme';
import TodoList from './JSS_StyledComponents/BaiTapStyleComponent/TodoList/TodoList';
import LifeCycleReact from './LifeCycle/LifeCycleReact';
import DemoHookUseState from './ReactHooks/DemoHookUseState';

function App() {
  return (
    // *************************** Demo ReactHook useState
    <div>
      <DemoHookUseState />
    </div>

    // ************************** LifeCycle
    // <div>
    //   <LifeCycleReact />
    // </div>

    // ************************ BaiTap TodoList
    // <div>
    //   <TodoList />
    // </div>

    // ********************** Demo Theme
    // <div>
    //   <DemoTheme />
    // </div>
  );
}

export default App;
