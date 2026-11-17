/* put your animation code here */
/* Exercise 10.6 - Simple jQuery Animation */


$(function () {
    // Bước 2: làm hiện ảnh từ từ trong 1000ms (1 giây)
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });


    // Bước 3: làm mờ và ẩn ảnh từ từ trong 1000ms
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });


    // Bước 4: bật/tắt hiệu ứng làm mờ trong 500ms
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });


    // Bước 5: các nút hiệu ứng trượt (Slide)
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });


    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });


    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});

