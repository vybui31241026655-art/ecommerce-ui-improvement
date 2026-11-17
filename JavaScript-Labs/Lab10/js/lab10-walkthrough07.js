/* put your animation code here */
$(function () {
    // Bước 2: khi rê chuột vào ảnh nhỏ
    $('figure img').on('mouseover', function (e) {
        // tạo đường dẫn ảnh phóng to dựa trên ảnh hiện tại
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");


        // tạo phần tử động chứa ảnh lớn và chú thích
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);


        // chuyển ảnh nhỏ sang tông màu xám
        $(this).addClass("gray");


        // làm hiện khung xem trước từ từ trong 1000ms
        $("#preview").fadeIn(1000);
    });


    // Bước 4: gắn sự kiện rời chuột và di chuyển chuột
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});


// Bước 3: hàm xóa khung xem trước và bỏ hiệu ứng xám khi rời chuột
function removePreview() {
    $(this).removeClass("gray");
    $("#preview").remove();
}


// Bước 3: hàm di chuyển khung xem trước theo tọa độ con trỏ chuột
function movePreview(e) {
    $("#preview")
        .css("top", (e.pageY - 10) + "px")
        .css("left", (e.pageX + 30) + "px");
}

