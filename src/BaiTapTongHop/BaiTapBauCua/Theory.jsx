// Các quy trình thực hiện bai tập BauCuaCaCop CyberSoft

// Học cybersoft để tích lũy hướng giải quyết vấn đề, khi mà gặp những vấn đề khó thì có thể giải quyết được
/**
 * Những yêu cầu cần thực hiện trong bài BauCuaCaCop CyberSoft
 *      + Dàn layout cho game
 *      + Thiết kế Redux lưu trữ state
 *      + Xây dựng chức năng cho game
 *      + tạo hiệu ứng animation sử dụng react Spring
 *
 * Note: Để làm một bài hay một dự án thì cần phải hiểu nghiệp vụ của nó như thế nào rồi mới triển khai ý tưởng để làm
 *     - Khi mà có Redux thì chia bao nhiêu component thì cũng không quan trọng , nhưng mà phải chia component sao cho hợp lý
 */
// Tuy nhiên chưa hướng dẫn phân cấp thư mục nên sẽ đặt chung vào thư mục làm project

// ********************************************* Thiết kế Redux để lưu trữ
/**
 * Dùng mảng quân cược để lưu trữ các quân cược,  mảng bao gồm {id , hình ảnh quân cược, số lượng quân cược cần cược}.
 *
 * Tổ chức Redux:
 *    + Quân cược thay đổi
 *    + Tiền thưởng thay đổi
 *    + Xúc Xắc thay đổi
 */

// *********************************************** Sử dụng CSS để làm hiệu ứng 3D cho cục xúc xắc

// *********************************************** Nhấn vào nút đặt cược thì tiền thưởng giảm đi hoặc tăng lên
/**
 * Mỗi lần click vào tăng hoặc giảm thì nút sẽ scale lên khi bỏ click thì nhỏ xuống
 * - Mỗi lần click vào thì tăng điểm cược lên và trừ điểm thưởng xuống => thay đổi state và danh sách cược\
 * - Khi mà click vào quân cược nào thì sẽ đưa dữ liệu của quân cược đó lên Redux => đồng thời cập nhật state điểm của quân cược và state điểm thưởng.
 * -
 */

// *************************************************** xử lý button Xốc trả điểm trúng thưởng hoặc là hoàn tiền lại
/**
 * Khi mà người dùng nhấn vào nút xốc thì sẽ render các con xúc xắc bầu cua ngẫu nhiên
 * Hình ảnh trong cái dĩa Xốc chúng ta sẽ truyền động mỗi lần nhân vào thì sẽ push vào cái mảng cứ
 */

// *************************************************** Xử lý tiếp khi mà random con xúc xắc thì sẽ hoàn tiền và cập nhật tiền thưởng như thế nào
/**
 *  Khi mà chúng ta thằng thì chúng ta sẽ so sánh điểm của mỗi quân cược và đĩa xốc có quân cược trùng với quân cược đã đặt
 * Duyệt từng phần tử trong danhSachXucXac
 *    + Xử lý điểm thắng trước sau đó là xử lý hoàn lại điểm cược
 *    + Có nghĩa là phải duyệt mảng xử lý điểm thưởng cho người chơi trước sau đó mới hoàn tiền hoặc không hoàn tiền nếu quân cược đó có hoặc không có trong danhSachXucXac
 *    + Có nghĩa là sẽ 2 vòng lặp lòng vào nhau, tính điểm thưởng sau rồi hoàn tiền
 *
 *    + Có thể duyệt mảng ngược lại theo như cầu mỗi người
 */

/**
 * Xử lý tăng điểm thưởng
 *   + Lấy mảng xúc xắc quét vào từng quân cược ở trên danh sach cược nếu có xx có trùng với quân cược được đặt thì tăng điểm thời
 *   +  Sau khi tăng điểm thưởng thì tiến hành hoàn lại số điểm cược đã cược
 *
 *  Handle:
 *    + duyệt mảng xúc xắc ngẫu nhiên vừa mới tạo ra
 *    + // Nếu có tồn tại thì, trả tiền thưởng bao nhiêu tiền cược thì trả bấy nhiêu điểm thưởng, còn trường hợp trong mảng XX có 2 hoặc 3 con trùng nhau thì cũng xử lý nốt qua các lần lặp tiếp theo
 */

// ******************************************* Thực hiện chức năng hoàn tiền làm mới

/** Thực hiện chức năng hoàn trả điểm cược/ không hoàn trả nếu QC không có trong DSXucXac */
/**
 * Xử lý hoàn tiền thì nên lấy DSQuanCuoc so sánh với DSXucXac nếu mà có QC trong DSXucXac thì hoàn tiền, nếu QC xuất hiện 2 3 lần thì cũng chỉ hoàn tiền 1 lần là được.
 * - Dùng findIndex như là một vòng lặp vì chỉ cần tìm thấy 1 lần là nó sẽ break ra ngay lập tức
 */

// ****************************************** Thực hiện hiệu ứng animation cho các con xúc xắc trong danhSachXucXacNgauNhien

// ****************************************** Sử dụng Redux creator
