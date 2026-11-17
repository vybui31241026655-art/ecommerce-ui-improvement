/* Exercise 10.2 - Basic Selectors */


// Bước 2: chọn textarea bằng id và gán giá trị
var msg = $('#msgArea');
msg.val("here is some new text");


// Bước 3: thay nội dung HTML của tiêu đề
$('#pageTitle').html("new Title");


// Bước 4: lấy giá trị thuộc tính class của textarea và hiển thị
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));


// Bước 5: chọn tất cả thẻ button và đổi màu nền
var buttons = $('button');
buttons.css('background-color', 'red');


// Bước 6: đổi màu nền của body
var temp = $('body');
temp.css("background-color", "ivory");


// Bước 7: thêm class "selected" cho các phần tử có class center-icons
$('.center-icons').addClass('selected');
