import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';

const DemoReduxApp = () => {
  // Dùng React hook để DOM tới thẻ
  let inputName = useRef(null);
  let inputContent = useRef(null);

  return (
    <div className="container">
      <h3 className="display-4 text-center">FakeBook App!</h3>
      <div style={{ width: 1000 }} className="card text-left">
        <div className="card-header">
          <div className="row">
            <div className="col-1 text-center">
              {/* Thì chỗ này là để hình */}
              <img
                style={{ height: 70 }}
                src="https://picsum.photos/50/50"
                alt="picture123"
              />
            </div>
            <div className="col-11">
              {/*  Cột bên đây là để những phần comment của người dùng */}
              <h6 style={{ marginBottom: '0.5rem' }} className="text-danger">
                Trọng
              </h6>
              <p>
                Hello! mình là Trọng hiện tại mình đang học Front End tại
                CyberSoft
              </p>
            </div>
          </div>
        </div>
        {/* Form group chứa các nội dung của người nhập vào */}
        <form className="card-body">
          {/* <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p> */}
          {/* Cardbody chứa các form input */}
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              type="text"
              name="name"
              ref={inputName}
            />
          </div>

          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              type="text"
              name="content"
              ref={inputContent}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoReduxApp;
