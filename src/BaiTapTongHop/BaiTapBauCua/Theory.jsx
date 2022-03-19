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
