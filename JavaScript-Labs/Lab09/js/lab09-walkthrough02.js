/* code goes here */
/* Code hoàn chỉnh bước 7 Exercise 9.2 */
var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] + " nodeType=" + stories.childNodes[i].nodeType);
    
    // Đổi màu nền các thẻ HTML (nodeType == 1) sang màu vàng nhạt để khác biệt
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "#FFFACD";
    }
}