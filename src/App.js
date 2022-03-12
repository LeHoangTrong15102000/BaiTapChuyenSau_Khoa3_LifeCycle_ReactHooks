import logo from './logo.svg';
import './App.css';
import DemoTheme from './JSS_StyledComponents/Themes/DemoTheme';
import TodoList from './JSS_StyledComponents/BaiTapStyleComponent/TodoList/TodoList';
import LifeCycleReact from './LifeCycle/LifeCycleReact';
import DemoHookUseState from './ReactHooks/DemoHookUseState';
import DemoUseEffect from './ReactHooks/DemoUseEffect';
import DemoUseCallBack from './ReactHooks/DemoUseCallBack';
import DemoUseMemo from './ReactHooks/DemoUseMemo';
import DemoUseRef from './ReactHooks/DemoUseRef';
import DemoUseReducer from './ReactHooks/DemoUseReducer';
import ContextProvider from './ReactHooks/Context/ContextProvider';
import DemoUseContext from './ReactHooks/DemoUseContext';
import DemoReduxApp from './ReactHooks/DemoReduxApp';

function App() {
  return (


    // ************************************ Demo Redux App thông qua React functional 
    <div>
      <DemoReduxApp />
    </div>
    // *************************** Demo ReactHook useState, useEffect
    // Lấy context Provider bọc toàn bộ ứng dụng thẻ của chúng ta.
    // <ContextProvider>
    //   {/* <DemoHookUseState /> */}
    //   {/* <DemoUseEffect /> */}
    //   {/* <DemoUseCallBack /> */}
    //   {/* <DemoUseMemo /> */}
    //   {/* <DemoUseRef /> */}
    //   <DemoUseContext />
    // </ContextProvider>

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
