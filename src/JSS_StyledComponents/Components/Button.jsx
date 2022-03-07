import styled from 'styled-components'

// Dùng thưu viện để định nghĩa một button, tên thư viện "chấm" với tên thẻ muốn định nghĩa
export const Button = styled.button`
    ${'' /* Viết giống như trong CSS */}
    ${'' /* background: ${props => props.bgPrimary ? 'blue' : 'orange'};
    color: ${props => props.bgPrimary ? 'pink' : 'blue'};
    font-size: ${props => props.fontSize2X ? '25px' : '15px'}; */}
    background-color: gray;
    color: green ;
    border: none;
    border-radius: 0.5rem;
    ${'' /* font-weight: bold; */}
    font-weight: ${props => props.fontWeight || 'bold'};
    padding: 1rem;
    opacity: 1;
        &:hover {
            opacity: 0.7;
            transition: all 0.5s;
        }
        &.button_styled{
            ${'' /* font-size: 25px; */}
        }

`

// Đây là cách để kế thừa trong Button
export const SmallButton = styled(Button)`
    font-size: 30px;
    color: pink;
    background-color: yellow;
    border-radius: pink;
    
`