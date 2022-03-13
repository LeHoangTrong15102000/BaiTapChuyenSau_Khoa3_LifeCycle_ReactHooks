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

// *************************************** Use memo
// Note memo và useMemo là khác nhau
// useMemo lưu trữ một cái hàm trả về giá trị là một cái object, Nếu muốn cái object đó không thay đổi hoặc chỉ thay đổi đối với cái state nào đó thôi thì chúng ta sẽ truyền hoặc không truyền cái state đó vào tham số thứ 2 là một cái mảng []
// Phải là callback trả về giá trị chứ không truyền trực tiếp giá trị vào được
// Muốn cái hàm không render lại khi mà chúng ta truyền props thì sẽ bỏ nó vào useMemo()
//

// *************************************** Use Ref
// Giá trị useRef không thay đổi sau mỗi lần render. Ngoài việc sử dụng như DOM useRef còn dùng trong việc lưu trữ các biến, hàm , mảng, object, sau mỗi lần render.

// *************************************** Use  Reducer
// UseReducer cũng như cái bảng nâng cấp của useState, dùng để quản lí những state của giao diện. Thay vì dùng nhiều useState hoặc useState với value là nested object/array và viết nhiều function để thay đổi state thì bây giờ các bạn có thể tổ chức state và các action làm thay đổi state đó 1 cách logic nhờ useReducer.
// dispatch có thẻ chạy nhiều object vào hàm cartReducer để thay đổi các state của hàm đó
// useReducer nhận vào 2 tham số, ham số thứ 1 là Reducer của chúng ta,tham số thứ 2  là giá trị mặc định của state reducer đó

// *************************************** Use Context
// Với useContext thì chúng ta sẽ quản lí state trên toàn bộ ứng dụng của chúng ta luôn
// Sau này chúng ta sẽ có một số bài nâng cao về Redux nữa. không chỉ có quản lí với những cái state không.
// Việc sử dụng useContext tương đương với việc sử dụng contextApi trong react class component không có quá nhiều sự khác biệt
// Không sử dụng thằng này thì sử dụng Redux cho nó dễ xài

// ************************************** Ở video sau hướng dẫn sử dụng Redux với những cái hook của Redux
// 2 Thư viện Redux sử dụng trong  việc sử dụng react functional là  useSelector và useDispatch, lúc trước là dùng connect giữa react và Redux còn bây giờ sẽ sử dụng 2 thư viện nầy để kết nói với Redux
// 2 thư viện hook useSelector và useDispatch không phải của React core cung cấp, mà 2 thư viện này thuộc thư viện react-redux cung cấp cho phép ta truy cập đến Reducer một cách dễ dàng và ngắn gọn hơn.
// Sẽ làm ví dụ để biết Redux nó sử dụng cho hooks là như thế nào

/**
 * Note:
 *  - Bước vào cái ứng dụng đầu tiên là phải làm giao diện trước, vừa code vừa làm giao diện rất là rối -> khiến cái flow đứt hoãn liên tục
 *
 *
 * Làm giao diện sử dụng React hook functional
 */
