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
