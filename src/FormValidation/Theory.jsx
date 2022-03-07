// Ở bootstrap thì không thực sự đánh giá cao nó
// Thì trong bài này sẽ vẫn dụng gg Input form
// Để sử dụng thư viện được
    /**
     * B1 : copy demo mẫu vào ứng dụng và fix cho chạy được
     * B2 : Tiến hành edit lại
     */

// Lấy thông tin từ thẻ input như thế nào
// Cách thực hiện -> là gán nguồn dữ liệu đó vào trỏng nút control luôn để khi mà người dùng nhập vào thì tự động cái state đó thay đổi cho mình luôn -> thì khi đó mình sẽ lấy được thông tin người dùng nhập vào
// Thay vì dung DOM gán riêng lẻ trên từng sự kiện onClick của form -> thì bây giờ gán trực tiếp sự kiện binding trên từng thẻ luôn

/**
 * Cách thức để lấy thông tin  
 *      - Đặt tên thuộc tính trong state trùng với control là "name" trong thẻ input luôn
 *      - Người dùng thay đổi ở sự kiện onChange của thẻ input, chúng ta muốn khi mà nhập liệu thì nó sẽ binding lên trang form cho chúng ta, thì chúng ta nhập vào cái gì nó sẽ binding ra cái đó
 * 
 *      - Viết một hàm để lấy value của từng ô input
 *     
 */

// *************************** Bài học tiếp validate cho ô input
// Kiểm tra nguồn dữ liệu đó xem có hợp lệ hay không
// Thì kiểm tra nguồn dữ liệu validation cũng là kiểm tra nó có thay đổi hay không -> thì cũng đặt trong state hoặc store của Redux
// Khi mà đặt thuộc tính lỗi mà đặt khác tên name thì rất là khó để binding được dữ liệu

// Sẽ luôn luôn đặt cái gì đó liên quan đến đúng cái tên thuộc tính "name" của thẻ input được nhập từ người dùng
// Sau đó sẽ tiến thành binding dữ liệu và những cái lỗi lên thẻ input của chúng ta.
// Tuy nhiên không phải để dữ liệu tĩnh, mà chúng ta sẽ sett cái lỗi khi mà binding dữ liệu xong 
// value thì sẽ lấy từ value mỗi khi thay đổi giá trị, errors sẽ lấy từ error mỗi khi bắt được lỗi của cái giá trị của ô input đó
// Bây giờ mình sẽ tiến thành sett như thế nào để mỗi lần nhập liệu nó sẽ lấy cái value binding lên cái state của mình đồng thời nó cũng kiểm tra cái lỗi của mình  

// Do mình chưa setState lại giá trị của values: nên khi nhập liệu vào thì nó vẫn là rỗng
// Không khuyến khích gọi 2 hàm setState liên tục với nhau -> chỉ cần gọi 1 hàm setState và viết nhiều phương thức để thực thi đều đó.

// Ở video sau sẽ hướng dẫn cách duyệt submit lại.-> sẽ chặn nút submit khi mà dữ kiện không hợp lệ
// Khi nhập mật khẩu sai mà người dùng vẫn có thể nhấn submit được -> nên chúng ta phải fix chỗ này, thì chúng ta sẽ gắn sự kiện submit cho cái form.
// Bữa sau sẽ học custom Form bằng JSS 


// c******************************* Bài học mới - Tìm hiểu về JSS
/**
 * JSS là gì ?
 *      + CSS in JS là một kỹ thuật sử dụng JS để định nghĩa các component kết hơp style css trong 1 file js. Nói nôm na là định nghĩa ra các component như button thẻ a, thẻ div,... có sẵn css bên trong. Cách viết này được gọi là JSS
 *      + Thường thì đối với việc phát triển UI component này có một số thư viện nổi tiếng như: Styled Components, Radium, Aphrodite, ...
 * - JSS có thể viết luôn CSS bằng JS này là kỹ thuật rất hay được rất nhiều công ty áp dụng vào.
 * - Trong phần này chúng ta sẽ học một vài thứ cơ bản và nâng cao của styled Component.
 * 
 */

/**
 * Đối với styled component khi định nghĩa jss sẽ được lợi ích gì ?
 *     + No class name bugs : Hạn chế lỗi trùng tên lớp bị đè css, ... vì mỗi component tạo ra được đặt 1 css riêng cho nó.
 *     + Easier deletion of CSS: Xóa css dễ dàng mà không bị ảnh hưởng các control khác.
 *     + Simple dynamic styling: tùy biến linh động dễ dàng bảo trì và cập nhật.
 *     + Automatic vendor prefixing: Viết css tiêu chuẩn.
 */

// ************************************************ Hướng dẫn về sử dụng JSS trong React
// Thì chúng ta sẽ tạo ra 1 cái component giống như là component button, nhưng chúng ta sẽ CSS nó bằng JS
// Bây giờ chúng ta sẽ viết một cái control chúng ta sẽ không dùng CSS mà chúng ta sẽ dùng JS để định nghĩa cái control ấy, đinh nghĩa một cái button mà nó vẫn xài được các thuộc tính của một button bình thường , không định nghĩa cho nó dùng một props hay gì

