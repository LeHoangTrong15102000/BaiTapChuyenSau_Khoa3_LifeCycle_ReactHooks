import React from "react";

const DemoReduxApp = () => {
  return (
    <div className="container">
      <h3 className="display-4 text-center">FakeBook App!</h3>
      <div style={{width: 1000}} className="card text-left">
        <img style={{width: 1000, height: 250}} className="card-img-top" src="https://picsum.photos/200/200" alt="picture123" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
};

export default DemoReduxApp;
