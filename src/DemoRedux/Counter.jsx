import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = (props) => {

    // Sử dụng useSelector để kết nối tới Redux store và lấy state về component
    const count = useSelector((state) => state)

    const dispatch = useDispatch()

    const handleIncrease = () => {
        // Để update state trên store cần tạo ra một action
        const action = {
            type: "INCREASE",
            data: count + 1
        }
        dispatch(action)
    }
  return (
    <div>
        <p>Counter: {count}</p>
        <button onClick={handleIncrease}>Click</button>
    </div>
    
  )
}

export default Counter