# AI Usage Log

## 1. Công cụ AI
Tên công cụ: [Gemini / GitHub Copilot trong VS Code]

## 2. Mục đích sử dụng
Phân tích website, đề xuất bố cục giao diện, tạo mã HTML/CSS, điều chỉnh giao diện.

## 3. Prompt đã sử dụng
1. Prompt phân tích website (Nhiệm vụ 2): [Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng
cho website thương mại điện tử.
Tôi đang khảo sát website: https://hapas.vn/ 
Hãy giúp tôi lập bảng phân tích các khu vực:
1. Trang chủ.
2. Danh mục sản phẩm.
3. Chi tiết sản phẩm.
4. Tìm kiếm.
5. Giỏ hàng.
Với mỗi khu vực, hãy nêu:
- Mục đích của chức năng.
- Thành phần giao diện cần có.
- Điểm thuận tiện đối với khách hàng.
- Một vấn đề có thể phát sinh.
- Một đề xuất cải tiến.
Không khẳng định những tính năng chưa được kiểm chứng.
Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.]

2. Prompt đề xuất giao diện (5.2): [Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử
bằng HTML5 và CSS3.
Tôi muốn cải tiến khu vực: thẻ sản phẩm trong trang danh sách sản phẩm của
website túi xách nữ hapas.vn, tập trung vào cách hiển thị giá bán, giá gốc
(gạch ngang), tỷ lệ giảm giá, nút "Thêm vào giỏ hàng" và bố cục trên điện thoại.

Vấn đề tôi quan sát được: Trên website Hapas.vn, danh sách sản phẩm túi xách hiển thị giá theo hai kiểu khác nhau: sản phẩm giảm giá có giá bán chữ đỏ, giá gốc gạch ngang và nhãn “Giảm X%”, còn sản phẩm không giảm giá chỉ có một mức giá. Cách trình bày này khiến các thẻ trong cùng một hàng có lượng thông tin không đồng đều, và khách hàng khó so sánh nhanh giá giữa các sản phẩm. Ngoài ra, tên sản phẩm khá dài (ví dụ “Túi Xách Tay Mini Dáng Hộp Lock Chic Size 19 - Nâu Caramel”) và mỗi màu của cùng một mẫu túi lại là một thẻ riêng, nên danh sách dễ bị lặp và khó quét mắt. Tôi sẽ thiết kế lại thẻ sản phẩm để giá bán, giá gốc và tỷ lệ giảm giá được trình bày nhất quán, rõ ràng, tên sản phẩm gọn gàng, nút thêm vào giỏ hàng dễ nhìn và dễ bấm, đồng thời bố cục hiển thị tốt trên cả máy tính và đảm bảo bố cục tốt trên điện thoại.

Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.

Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.
Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.]
3. Prompt tạo mã nguồn (5.3): [Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện
thương mại điện tử bằng HTML5 và CSS3.
Yêu cầu:
- Giao diện có tiêu đề và khu vực sản phẩm.
- Có tối thiểu 4 sản phẩm mẫu.
- Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
Giải thích cách chạy trang web và những phần tôi cần kiểm tra.]
4. Prompt yêu cầu chỉnh lại giao diện bằng Copilot (sửa ảnh lỗi, làm đẹp hơn)

## 4. Kết quả AI đề xuất
[Tóm tắt 3-4 dòng: AI đề xuất phương án nào, tạo ra những gì]

## 5. Kiểm tra và điều chỉnh
- Đối chiếu kết quả AI với website thực tế; loại bỏ nhận xét sai (ví dụ: AI cho rằng trang chủ khó tìm nhóm hàng, không đúng với website).
- Phát hiện ảnh bị lỗi do dùng link ngoài, đã thay bằng ảnh trong images/.
- Kiểm tra ở kích thước điện thoại, máy tính bảng, máy tính bằng Chrome DevTools.

## 6. Phần tôi hiểu và có thể giải thích
- display: grid và grid-template-columns: tạo lưới sản phẩm.
- @media: đổi số cột theo kích thước màn hình.
- text-decoration: line-through: gạch ngang giá gốc.