// Học xong khóa Master Reactjs này chúng ta có thể làm junior vì chúng ta đã có tiếp cận với dự án trong khóa rồi

// React functional component thì không sử dụng state props của class components
// Hooks ra đời cho phép chúng ta có thể sử dụng 2 khái niệm về state và lifeCycle này trong functional component, giúp code clean hơn và ngắn hơn.

// Nên Hooks nó sẽ dùng nhiều hơn trong các dự án bây giờ
// Nhiều khi hiểu mà mình không thể nào nói được thì mình không thể nào chứng mính được với nhà tuyển dụng là mình hiểu về công nghệ đó hết.

// *************************************
// useEffect chạy sau khi DOM được cập nhật có thể hiểu là chạy sau khi render
// Có thể gọi useEffect nhiều lần trong 1 component

/**
 * Note:
 *  + Chỉ họi hook ở trên cùng.
 *  + không gọi Hook bên trong loop, câu điều kiện, hay các function lồng với nhau
 *  + Chỉ dùng Hook với react function component
 * 
 * - Thay vì đó, luôn sử dụng Hook ở trên cùng của function. Với cách này, bạn đảm bảo các Hook được gọi theo đúng thứ tự
 *  trong các lần render. Nó cho phép React có được đúng state giữa nhiều lần gọi useState và useEffect.
 *        lý do: https://vi.reactjs.org/docs/hooks-rules.html .
 * 
 * - Ngoài ra react cho phép chúng ta custom hook (Tạo ra các hook của riêng ta dựa trên các hook cơ bản của react -> Xây dựng trên nguyên tắt kế thừa không phải thay đổi)
 *          https://vi.reactjs.org/docs/hooks-custom.html .
 */