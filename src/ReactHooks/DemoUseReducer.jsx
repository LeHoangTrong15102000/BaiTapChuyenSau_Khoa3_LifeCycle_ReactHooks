import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  memo,
} from 'react';

let initialCart = [
  // { id: 1, name: 'HTC phone', price: 1000, quantity: 1 }
];

// Khai báo Reducer cho nghiệp vụ của giỏ Hoàng
// Nó sẽ đem thằng initialCart gán vào giá trị mặc định của hàm đó là state
const cartReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'addToCart': {
      // let cartUpdate = [...state, action.item];
      // Kiểm tra trong giỏ hàng có sản phẩm đó chưa, nếu chưa có thì thêm vào , nếu có rồi thì tăng số lượng lên
      let cartUpdate = [...state];

      let index = cartUpdate.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      if (index !== -1) {
        // thì tăng số lượng lên 1
        cartUpdate[index].quantity += 1;
      } else {
        let cartItem = { ...action.item, quantity: 1 }; // lấy lại tất cả các thuộc tính của cartItem thêm vào quantity: 1
        cartUpdate.push(cartItem);
      }

      // trả về cái mảng mới
      return cartUpdate;
    }

    // nó khác với thằng useState, useState là trả về giá trị mới cho giá trị cũ, còn thz useReducer phải xử lý rồi mới trả về
  }
  return { ...state };
};

// Giờ mình muốn có một mảng sản phẩm để render ra, mà mảng sản phẩm thì chung ta ko có render đi render lại nhiều lần nên chúng ta sẽ không để nào vao function chính
let arrProduct = [
  { id: 1, name: 'HTC phone', price: 2000 },
  { id: 2, name: 'Iphone Xs Max', price: 2000 },
  { id: 3, name: 'Iphone 13 Pro Max', price: 2000 },
];

// state của chúng ta bây giờ là một object nên phải xử lý nó mới ra được state mới

const DemoUseReducer = (props) => {
  // Muốn lấy giỏ hàng và những tác động tới giỏ hàng thì khai báo us eReducer
  let [cart, dispatch] = useReducer(cartReducer, initialCart);
  // dispatch sẽ nhận vào cái object nào đó để nó xử lý và trả ra lại cái state mới

  // Viết hàm thêm vào giỏ hàng
  const addToCart = (itemClick) => {
    // console.log(itemClick);
    // mà phần xử lý của chúng ta tại đây hiện tại rất phức tạp
    // dispatch một cái action
    const action = {
      type: 'addToCart',
      item: itemClick,
    };
    dispatch(action);

    // thì cái dispatch sẽ đưa mình vào cái reducer
  };

  // thì useReducer chỉ sử dụng cho cái state trên component này thôi, để sử dụng cho những component khác thì phải dùng useContext

  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((product, index) => (
          <div className="col-4" key={index}>
            <div style={{ width: 250 }} className="card text-left">
              <img
                style={{ width: 250, height: 250 }}
                className="card-img-top"
                src="https://picsum.photos/200/200"
                alt="picture123"
              />
              <div className="card-body bg-info">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.price}</p>
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="btn btn-success"
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center">Giỏ hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>tổng tiền</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>{item.quantity * item.price}</th>
              <th>
                <button className="btn btn-primary mr-2">Sửa</button>
                <button className="btn btn-danger">Xóa</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(DemoUseReducer);
