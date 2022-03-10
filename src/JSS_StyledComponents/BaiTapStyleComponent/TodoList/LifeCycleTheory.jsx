// Lí thuyết về lifeCycle trong bài tập todoList

// Trong quá trình nó render lại thì nó sẽ lấy dữ liệu từ props nó lại binding lên, đè lên lại "value" của ô input mà dữ liệu từ props trong Redux thì mình gán tĩnh nên do đó khi nhắn vào ô input nó không thay đổi giá trị trên ô input là vậy

// setState thì nó sẽ lấy cái props gán vào cái value cho nên chúng ta sẽ không thay đổi được gì hết -> vì vậy chúng ta sẽ can hiệp vào việc này.

/**
 * Dữ liệu value input taskName được lấy từ props(state từ Redux).
 * Mỗi lần người dùng nhập liệu cần binding giá trị vào state => setState => lifeCycle phương thức render chạy lại => input lại lấy dữ liệu từ Redux mà không phải từ người dùng nhập vào.(Khi người dùng nhập vào ô input thì state  thay đổi chứ không phải là props thay đổi).
 *  + Khắc phục
 *      => Xử lý trước khi hàm render được gọi ta cần can thiệp bằng lifeCycle để lấy props từ Redux => gán về thuộc tính this.state của component, và value của input phải binding từ state
 */
