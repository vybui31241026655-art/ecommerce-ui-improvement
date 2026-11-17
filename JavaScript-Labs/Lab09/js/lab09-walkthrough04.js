/* code goes here */
/* Code hoàn chỉnh bước 6 Exercise 9.4 */
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // Ẩn hẳn sau 1000ms
        setTimeout(function() {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // Khôi phục class sau 500ms
        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});
