import React, { useState, useEffect, useMemo, useCallBack, memo } from 'react';
import ChildUseMemo from './ChildUseMemo';

const DemoUseMemo = (props) => {
  let [like, setLike] = useState(1);
  const renderCart = () => {
    let cart = [
      { id: 1, name: 'iphone', price: 1000 },
      { id: 2, name: 'htc phone', price: 2000 },
      { id: 3, name: 'lg phone', price: 3000 },
    ];

    return cart;
  };
  const cartMemo = useMemo(renderCart, [like]); //và cái tham số thứ 2 làm cho cái hàm useMemo luôn luôn không đổi, khi nào có state nào điền vào làm thay đổi cart thì nó mới render lại

  // Khi mà chạy lệnh setLike thì nó sẽ render lại và tạo lại cái object cart vì vậy khi thằng con nhận vào cái mảng mới thì nó thấy cái giá trị props đó thay đổi nên nó sẽ render lại giao diện.

  // Tóm lại thì useMemo sẽ đối với giá trị và useCallback sẽ sử dụng đối với hàm
  /**
   * Hàm không trả về giá trị thì dùng useCallback
   * Hàm trả về giá trị thì dùng useMemo
   */
  return (
    <div>
      <div className="m-5">
        Like: {like} ♥
        <span
          style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
          onClick={() => {
            setLike(like + 1);
          }}
        >
          ♥
        </span>
        <br />
        <br />
        <ChildUseMemo cart={cartMemo} />
      </div>
    </div>
  );
};

export default DemoUseMemo;
