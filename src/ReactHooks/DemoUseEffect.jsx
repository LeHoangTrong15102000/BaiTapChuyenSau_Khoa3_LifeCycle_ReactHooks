import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoUseEffect(props) {
  // sau này sẽ sử dụng useEffect để thay thế lifecycle

  let [number, setNumber] = useState(1);
  

  let [like , setLike ] = useState(1)
  console.log(like)

  // Hàm này ở trong function nên nó không phải là phương thức do đó phải có từ khóa khai báo biến
  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };
  

  // Là hàm chạy sau khi giao diện được render ra thay cho didUpdate và  didMount trong mỗi trường hợp, và sau khi setState thì nó cũng chạy lại
  // useEffect(() => {
  //   console.log("DidMount")
  // })

  // Cách viết thay thế cho componentDidMount
  useEffect(() => {
    console.log("ComponentDidMount")
  }, []);// Sau này sẽ dùng cách này để call API

  // Cách viết thay thế cho componentDidUpdate({})
  useEffect(() => {
    console.log("DidUpdate khi number thay đổi")
  },[number, like]);// number là giá trị nếu bị thay đổi sau render thì useEffect này sẽ bị thay đổi, Chỉ khi giá trị number thay đổi thì thằng useEffect sẽ gọi tiếp còn không thì thôi
  // Khi một trong 2 thằng thay đổi thì thằng này nó điều sẽ chạy

  console.log("Render component")
  // State của thằng khác thay đổi thì useEffect của thằng trong tham số thứ 2 sẽ không đổi

  // Còn nếu như muốn thay thế cho lifeCycle WillUnmount

  return (
    <div className="container">
      <div className="card text-left" style={{ width: 250 }}>
        <img
          style={{ width: 250, height: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture123"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}> {number} ♥</p>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
      <button onClick={() => {
        setLike(like + 1)
      }}>Like</button>

      {/* Mặc định ban đầu thì nó sẽ render ra, khi mà tăng số đếm lên thì nó sẽ mất đi */}
      {/* {like === 1 ? <ChildUseEffect /> : ''} */}
    </div>
  );
}
