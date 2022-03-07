// Bên trong sẽ là những Component mà chúng ta thiết kế và để trong đây, ví như button, header, footer, ...
// Nên giữ lại tên của control gốc chỉ dùng JS để định nghĩa lại cai button mà thôi
// Chúng ta có thể CSS một className bên trong JSS được luôn

// Ngoài className và styled thì trong JSS nó còn cho phép mình định nghĩa thêm cho thuộc tính đó là props\
// Thuộc tính props này là tự thằng style nó có không giống với props của components.
// Thay vì CSS chúng ta có thể truyền props , truyền tham số vào. Ngoài ra còn có thể truyền props là một giá trị


// Giả dụ là ở trên ta đã định nghĩa một cái button với màu sắc kích thước và border rồi,... Mà chúng ta lại muốn tạo 1 component button khác nhưng không muốn viết lại tất cả ta có thể dùng hàm styled(Button) kế thừa của Button đã định nghĩa từ trước.
// Khai báo một thứ gì đó trong JSS thì tất cả các chữ đầu phải viết hoa


// ***************************************
// Ở video sau sẽ học tới phần tương đối là phức tạp một chút có liên quan đến props nó chứa className và nội dung phần bên trong mình truyền vào.
// hay là cách CSS một cái component bất kì nào đó, định nghĩa một hàm thay đổi hình dạng của thẻ đó -> customize