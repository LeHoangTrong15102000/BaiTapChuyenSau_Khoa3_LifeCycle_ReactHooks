import styled from 'styled-components'
import React from 'react'


// Thiết kế container bằng cách sử dụng JSS
export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid ${props => props.theme.borderColor}
`

// Cái viền của TodoList sẽ được lấy từ cái theme
// Mình sẽ định nghĩa những cái theme nào ở trong thư mục theme để quản lí dễ những phần này
