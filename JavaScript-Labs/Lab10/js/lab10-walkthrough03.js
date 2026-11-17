/* try the different advanced selection calls here */
/* Exercise 10.3 - Advanced Selectors */

// Bước 2 + 3: chọn tất cả ô password và đổi màu nền (đã comment out theo bước 3)
// $(':password').css('background-color', 'yellow');

// Bước 4: chọn mỗi phần tử con thứ 4 trong form và đổi màu nền
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn các label có chứa chữ "word" và đổi màu chữ
$('label:contains("word")').css("color", "black");

