import React, { useState, useEffect, useRef, useCallback, useContext} from 'react'
import { context } from './Context/ContextProvider.jsx'

let arrProduct = [
    { id: 1, name: 'HTC phone', price: 2000 },
    { id: 2, name: 'Iphone Xs Max', price: 2000 },
    { id: 3, name: 'Iphone 13 Pro Max', price: 2000 },
  ];

const DemoUseContext = (props) => {

    // Sử dụng useContext ở bên trong react Hook
    // Giỏ hàng 
    // Muốn sử dụng được những giá trị từ provider thì phải khai báo cái hooks là useContext

    // lấy Reducer từ thằng context, muốn lấy Reducer thì phải bóc tách phần tử ra
    // Nếu lấy bình thường là lấy cái biến store của nó
    let { cartReducer } = useContext(context);// Giỏ hàng sẽ binding từ store useContext

    let [cart, dispatch] = cartReducer 
  // Viết hàm thêm vào giỏ hàng
  const addToCart = (itemClick) => {
    // console.log(itemClick);
    // mà phần xử lý của chúng ta tại đây hiện tại rất phức tạp
    // dispatch một cái action
    const action = {
      type: 'addToCart',
        product: itemClick,
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
}

export default DemoUseContext