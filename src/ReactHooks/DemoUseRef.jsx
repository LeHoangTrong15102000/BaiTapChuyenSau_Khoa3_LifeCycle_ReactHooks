import React, { useState, useEffect, useRef, useCallback } from 'react';

const DemoUseRef = (props) => {
  const inputUserName = useRef(null); // Dùng useRef để DOM tới các thẻ input
  const inputPassWord = useRef(null);

  let userName = useRef('');

  let [userLogin, setUserLogin] = useState({ userName: '' });

  // Hàm xử lý đăng nhập
  const handleLogin = () => {
    // Trong đây mỗi lần mình click vào nút Login sẽ lấy được giá trị của userName và passWord
    // let inUserName = inputUserName.current.value;
    // let inPassWord = inputPassWord.current.valeu;

    console.log('userName', userName); // Khi Render lại thì thằng này vẫn là rỗng chứ hook useRef
    console.log('userLogin', userName);

    userName.current = 'Le Hoang Trong';
    setUserLogin({
      userName: userName,
    });
  };

  // useRef thường sử dụng cho những chức năng về search, animation.

  return (
    <div className="container">
      <h2>Login Form</h2>
      <div className="form-group">
        <h3>UserName</h3>
        <input ref={inputUserName} name="userName" className="form-control" />
      </div>
      <div className="form-group">
        <h3>PassWorđ</h3>
        <input ref={inputPassWord} name="passWord" className="form-control" />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default DemoUseRef;
