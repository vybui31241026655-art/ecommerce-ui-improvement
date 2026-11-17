/* put your DOM code here */
/* Exercise 10.5 - Inserting DOM Elements */


$(function () {
    // tạo một phần tử DOM mới
    var img = $('<img src="images/art/thumbs/13030.jpg" >');


    // chọn panel để chèn phần tử mới vào
    var panel = $('.panel');


    // Mỗi lần chỉ bật MỘT dòng bên dưới, các dòng còn lại để comment.


    // Bước 2: chèn img SAU panel
    panel.after(img);


    // Bước 3: chèn img TRƯỚC panel
    // panel.before(img);


    // Bước 4: chèn img vào CUỐI bên trong panel
    // panel.append(img);


    // Bước 5: chèn img vào ĐẦU bên trong panel
    // panel.prepend(img);


    // Bước 6: giống bước 4 nhưng viết theo chiều ngược lại
    // img.appendTo(panel);


    // Bước 7: giống bước 5 nhưng viết theo chiều ngược lại
    // img.prependTo(panel);


    // Bước 8: giống bước 3 nhưng viết theo chiều ngược lại
    // img.insertBefore(panel);
});

