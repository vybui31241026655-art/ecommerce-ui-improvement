HAPAS Product Card Demo — HTML5 & CSS3
=======================================

Cấu trúc
--------
- index.html  : cấu trúc trang và 4 sản phẩm mẫu
- styles.css  : toàn bộ kiểu dáng và responsive
- README.txt : hướng dẫn này

Cách chạy
---------
1. Giải nén file ZIP.
2. Mở thư mục hapas-product-card-demo.
3. Nhấp đúp index.html để mở bằng trình duyệt (Chrome, Edge, Firefox).
4. Cần kết nối Internet để tải ảnh sản phẩm từ images.unsplash.com. Trang không dùng backend hay cơ sở dữ liệu.

Tương tác demo
--------------
Nút “Thêm vào giỏ hàng” cập nhật số đếm trên đầu trang và tạm đổi nhãn thành “Đã thêm”.
Đây chỉ là tương tác JavaScript phía trình duyệt; dữ liệu không được lưu và sẽ trở về 0 khi tải lại.

Điểm cần kiểm tra
-----------------
- Desktop: khoảng 1280px và 1440px; lưới thường hiển thị 4 cột.
- Tablet: khoảng 768px–1024px; lưới hiển thị 3 cột (tùy chiều rộng).
- Mobile: 360px, 390px và 430px; lưới hiển thị 2 cột.
- Tên dài không làm lệch bố cục; giá và nút không tràn ra ngoài thẻ.
- Sản phẩm giảm giá có giá gốc gạch ngang và nhãn phần trăm; sản phẩm giá thường không hiển thị giá gốc/nhãn giảm.
- Bấm từng nút để kiểm tra số đếm và phản hồi.
- Dùng phím Tab để kiểm tra focus của liên kết và nút.
- Kiểm tra ảnh khi có và không có Internet; URL ảnh hiện là ảnh từ xa.
- Giá, tên, hình ảnh và nhãn khuyến mại là dữ liệu minh họa, không phải thông tin bán hàng thực tế của HAPAS.

Lưu ý
-----
Đây là bản demo giao diện. Liên kết chi tiết sản phẩm đang là liên kết minh họa (#...), và nút giỏ hàng không tạo đơn hàng thật.
