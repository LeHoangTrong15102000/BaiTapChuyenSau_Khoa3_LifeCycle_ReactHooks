import React, { useState, useEffect } from "react";

// Demo cho việc của componentWillUnmount
export default function ChildUseEffect() {

    let [number, setNumber ] = useState(1)
//   console.log("render ChildUseEffect");


  useEffect(() => {
    // Viết cho didUpdate
    console.log("DidUpdate")
    
    // Hàm này không tự kích hoạt chỉ khi copmponent nó mất đi
    return () => {
      // Chỗ này sẽ xóa đi những cái biến mà nó không chạy nữa để nó giải phóng
      console.log("willUnmount")
    }
  }, [number])
  
  return <div>
      <textarea></textarea> <br /> <br />
      <button className="btn btn-success">Gửi</button>
  </div>;
}
