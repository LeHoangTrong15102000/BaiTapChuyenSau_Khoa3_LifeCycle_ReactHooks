import styled from 'styled-components'
import React from 'react'

// let { className, children } = props;
// export const link = (props) => {
//     // thông thường thì document nó sẽ ghi theo cách mới
//     return <a className={props.className}>
//             {props.children}
//      </a>
// }

// Dấu ngoặc "()"  sẽ tương đương với dấu "{}" và lệnh return trong dấu đó
// Ở đây có sử dụng thư viện component thì phải import react vào
export const Link = ({className, children, ...restProps}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid

    // Bên trong của thẻ <a></a> chỉ định nghĩa phần CSS thôi chứ nó không định nghĩa phần nội dung bên trong thẻ đó
    <a className={className}>
        {children}
    </a>
)


// Cái này là dùng trên thẻ component bất kì
// Do xài quá nhiều thư viện bên ngoài vào do đó nó sẽ bị đè lên CSS của component
// Dùng Styled này để định nghĩa cho component bất kì
export const StyledLink = styled(Link)`
    color: pink !important;
    font-weight: bold;
    font-size: 50px
`

// Styled chỉ định nghĩa CSS cho những component cơ bản

// Sau này sẽ giới thiệu thư viện phổ biến nhất tự styled hết tất cả các component này -> thư viện ant - design

// Đối với định nghĩa nội dung bên trong thì thằng Link nó sẽ ra nội dung còn thằng Styled nó chỉ ảnh hưởng về mặt CSS mà thôi