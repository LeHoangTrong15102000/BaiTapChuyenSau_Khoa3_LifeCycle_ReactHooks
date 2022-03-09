// Những cái thẻ do chúng ta tạo ra vẫn có thể gắn class vào nhưng mà nếu sử dụng component để styled lại thì nó đã ko còn đúng bản chất của styled componets nữa

// Bữa sau sẽ hướng đẫn thay đổi dữ liệu và cái state của chúng ta là gì -> để lưu trữ những thông tin của Todo List trong Redux.

// ***************************************
// bài hôm này sẽ thực hiện chức năng như là đổi theme, tổ chức Redux khi mà chúng ta Add Task vào

// ***************************************
// Ở video sau sẽ làm và thực hiện xử lý chức năng thêm Addtask, EditTask, DoneTask, DeleteTask

// ***************************************
// Ở video này chúng ta sẽ thực hiện binding ra theme bằng cách chọn select
// Mỗi khi người dùng chọn theme thì nó sẽ dispatch lên những cái object là những theme được định nghĩa sẵn trong folder themes
// Thì ở trên Reducer cũng viêt cái hàm dispatch xử lý việc là khi mà mình change theme sẽ gọi sự kiện onChange để thay đổi thuộc tính của theme.

// **************************************
// Ở video này sẽ thực hiện chức năng Done task và Delete task

// Chức năng done task khi mà nhấn vào done task thì nó sẽ quăng cái task của chúng ta xuống Todo Completed

// Còn delete task thì nó sẽ xóa luôn cái task của chúng ta đi

// **************************************
// Bài sau sẽ học về lifeCycle để thực hiện chức năng Edit task và upload task lên
// Mỗi lần chỉnh sửa thì nó sẽ load cái taskName ngược lên lại chỗ để chỉnh sửa, và sẽ có cái state để chứa id của taskName đó
// Mỗi khi nhấn vào nút edit thì chúng ta sẽ dispatch lên một cái action của task để mà chỉnh sửa, thì cái nội dung của taskEdit trong Redux nó sẽ được mapStatToProps vào ô input 

// Nhưng mà khi editTask như vậy thì nó sx có vấn đề phát sinh -> đó là khi ấn vào bàn phím thì nó không chạy chữ -> do nó có phần chạy ngầm ở dưới -> bài tiếp theo sẽ học về lifeCycle để rõ hơn về phần này

