// React animation là một thư viện của React
/**
 * Thì để tạo ra animation thì bạn chỉ cần sử dụng css để thay đổi thuộc tính của phần tử kết hợp với thuộc tính transition. Nó có thể giúp chúng ta thực hiện các animation cần thiết như fadeIn, fadeOut, slideIn, slideOut\
 * - Sử dụng CSS chỉ gặp khó khăn khi animation của bạn quá phức tạp, kết hợp nhiều bước hoặc cần tính toan dựa trên tương tác c ủa người dùng, vì vậy đẻ sử dụng animation trong react thường có nhiều th ư viện để hỗ trợ 1 trong các thư viện phổ biến nhất là react Spring
 *
 * - Các hooks cơ bản
 *  + useSpring
 *  + useSprings
 *  + useTrail
 *  + usetransition
 *  + useChain\
 *
 * Các bước tìm hiểu một cái thư viện là
 * B1: Cài đặt thư viện
 * B2: Chép demo chạy thử làm theo hướng dẫn document
 * B3: Đọc tài liệu về các thuộc tính giá trị để hiểu demo đó
 * B4: Chỉnh sửa lại theo 1 ví dụ nào đó của mình
 */

// Nên học cách sử dụng animation của nó và tìm cách lấy những cái animation này

// Giới thiệu về khái niệm của các hooks

// ***************************************** useSpring
// - useSpring hỗ trợ hàm chuyển động từ trạng thái a -> b
// - Ta có thể tùy biến tên biến, ví dụ bên dưới opacity(có thể đặt tên lại! không phải tên css đâu chẳng qua ta muốn gắn nó vào style cho tiện nên mới đặt tên trùng)
//
// Trong biến có thể truyền linh động, ví dụ như là mảng, object không nhất thiêt là phải truyền vào chuỗi không.

//  Sẽ nói về phần sử dụng biến chạy từ from đến to mà không sử dụng css
// Các giá trị trong to: {} không chỉ là những con số ngoài ra còn có thể là một object, một mảng => Khi mà là object hoặc là mảng thì cái cách mà chúng ta sẽ lấy ra là như thế nào

// ***********************************
// Bài giảng hôm nay sẽ học về useSprings
// useSprings thực hiện trên nhiều component với nhiều giá trị khác nhau

// ***************************************  Bài học về useTrail
// Định nghĩa nhanh một cấu hình cho nhiều giá trị, thằng useSpring mỗi cái nó sẽ mỗi định nghĩa, còn thằng này sẽ định nghĩa đồng loạt cho chúng ta và tụi nó thực thi nối tiếp nhau
// Trong useTrail hỗ trợ cho chúng ta 2 cái hàm là set() và stop()
/**
 * Hàm set là set toàn bộ giá trị theo giá trị mặc định nào đó
 *
 *  Tóm lại thì thằng useSpring dịnh nghĩa cho mỗi phần tử có cái spring khác nhau còn thằng useTrail định nghĩa cho các phần tử có cái spring giống nhau, tuy nhiên thằng Trail sẽ thực hiện tuần tự trong lúc chạy
 */

// ******************************************** useTransition
// useTransition định nghĩa cho một mảng các phần tử
/**
 * tham số đầu tiên là nhận vào giá trị mảng của chúng ta
 * tham số thứ 2 là cái key mà nó sẽ sinh ra( là một callBack trả về giá trị index của từng component trong mảng)
 * tham số thứ 3 giống như useSpring và useTrail sẽ là định nghĩa chuyển động của animation đó(animation mà chúng ta sẽ định nghĩa)
 */


// ******************************************* useChain
// useChain là sự kết hợp nhiều animation hook đã được định nghĩa theo 1 trình thực hiện nó theo trình tự
// Cú pháp của useChain => useChain([phần tử 1, phần tử 2])
/**
 * 
 */