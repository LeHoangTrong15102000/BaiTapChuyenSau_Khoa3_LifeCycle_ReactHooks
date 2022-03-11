/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

export default function DemoHookUseState(props) {
  // thì tất cả những phần tử chúng ta sẽ khai báo trong block code này của state

  // tuple
  let [state, setState] = useState({ like: 0 });
  console.log(state.like);
  // Hàm xử lý like
  const handleLike = () => {
    setState({
      like: state.like + 1,
    });
  };

  // Nếu có một cái mảng trong đây thì mỗi lần setState lại thì nó sẽ khai báo một mảng mới
  let arrProducts = []; // Mỗi lần render lại thì nó sẽ khai báo lại mảng này

  // Khi mà click vào thì nguyên cả function sẽ chạy lại
  // Thằng React class component chỉ chạy một số lifecycle thôi còn thằng functional thì sẽ lại hết nguyên hàm
  return (
    <div className="container">
      <div className="card text-left" style={{ width: 250 }}>
        <img
          style={{ width: 250, height: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: 'red' }}> {state.like} ♥</p>
          <button onClick={handleLike} className="btn btn-success">
            Thả tim
          </button>
        </div>
      </div>
    </div>
  );
}
