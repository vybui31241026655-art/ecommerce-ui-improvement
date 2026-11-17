// Biến toàn cục (Global scope)
var boxClass = 'movingDiv';

function outputBox(num) {
    // Thử có 'var' (Bước 9) -> Console báo lỗi ReferenceError
    // Thử xóa 'var' (Bước 10) -> Console in ra thẻ <div id='div5'>
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}