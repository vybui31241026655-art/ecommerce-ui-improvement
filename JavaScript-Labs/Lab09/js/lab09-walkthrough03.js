/* code goes here */
/* Code hoàn chỉnh Exercise 9.3 */
var first = document.getElementById("first");
var text = document.createTextNode("This paragraph is dynamically added via DOM");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));