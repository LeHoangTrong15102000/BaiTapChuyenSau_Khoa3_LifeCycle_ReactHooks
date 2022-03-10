// Để cho chuẩn thì tất cả những thuộc tính sẽ được khai báo ở trong constructor()
// LifeCycle không gọi nhưng mà nó vẫn tự chạy

// ở trạng thái mounting thì nó sẽ gọi lifeCycle tự động kích hoạt
// Các lifeCycle sẽ tự động kích hoạt khi mà component render ra giao diện

// Mounting là những trạng thái của component khi mà nó được sinh ra rồi thẻ đó được gắn vào giao diện (chạy constructor -> getDeriveStateFromProsp -> render -> chạy tới lifeCycle của component con -> chạy xong hết rồi thì tới componentDidMount)

// Updating là khi mà thay đổi props hoặc cập nhật state mới (Những cái hàm của component nó sẽ tự động kích hoạt rồi xong chạy tới componentDidUpdate)

// Unmounting thì component nó sẽ mất đi khỏi giao diện và nó sẽ gọi đến(componentWillUnmount) trước khi nó biến mất khỏi giao diện thì nó sẽ gọi componentWillUnmount -> Ứng dụng lifeCycle này để chuyển từ trang nay sang trang kia
