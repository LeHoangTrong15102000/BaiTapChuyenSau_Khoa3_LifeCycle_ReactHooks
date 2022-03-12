import React, { useState, useEffect, useRef, useCallback, useContext, useReducer} from 'react'

// Tạo một cái context
export const context = React.createContext();

let initialCart = [];
let cartReducer = (state, action) => {
    console.log('action', action)
    switch(action.type) {
        case "addToCart" : {
            let index = state.findIndex(item => item.id === action.product.id)
            if (index != -1) {
                state[index].quantity += 1
                return [...state]
            }
            return [...state, {...action.product, quantity: 1}];// Ngược lại thì thêm sản phẩm vào và thêm thuộc tính là quantity: 1
        }
        default: return state;
    }
}


// Component muốn tạo ra để bao toàn bộ ứng dụng của mình
const ContextProvider = (props) => {
    
    // Dùng context bao bọc tất cả thẻ bên trong(cụ thể là app)
    let [cart, dispatch] = useReducer(cartReducer, initialCart)

    // tạo một store để chứa các Reducer trong đó
    const store = {
        cartReducer: [cart,dispatch]
    }


    // truyền store xuống provider thông qua thuộc tính là value để share cho các thằng con trong nó sử dụng
  return (
    <context.Provider value={store}>
        {props.children}
    </context.Provider>
  )
}

export default ContextProvider