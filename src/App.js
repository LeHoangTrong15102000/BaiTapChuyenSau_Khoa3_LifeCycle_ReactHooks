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
import DemoUseSpring from './ReactHooks/ReactSpring/DemoUseSpring';
import Ex2UseSpring from './ReactHooks/ReactSpring/Ex2UseSpring';
import Ex3UseSprings from './ReactHooks/ReactSpring/Ex3UseSprings';
import Ex4UseTrail from './ReactHooks/ReactSpring/Ex4UseTrail';
import Ex5UseTransition from './ReactHooks/ReactSpring/Ex5UseTransition';
import Ex6UseChain from './ReactHooks/ReactSpring/Ex6UseChain';
import BaiTapBauCua from './BaiTapTongHop/BaiTapBauCua/BaiTapBauCua';

function App() {
  return (
    // ************************************ BaiTapBauCauCaCop
    <div>
      <BaiTapBauCua />
    </div>

    // ************************************ Demo useSpring
    // <div>
    //   {/* <DemoUseSpring /> */}
    //   {/* <Ex2UseSpring /> */}
    //   {/* <Ex3UseSprings /> */}
    //   {/* <Ex4UseTrail /> */}
    //   {/* <Ex5UseTransition />  */}
    //   {/* <Ex6UseChain /> */}
    // </div>

    // ************************************ Demo Redux App thông qua React functional
    // <div>
    //   <DemoReduxApp />
    // </div>

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
