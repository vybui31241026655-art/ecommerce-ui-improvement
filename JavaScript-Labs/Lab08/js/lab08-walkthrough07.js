var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

// document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Vòng lặp xuất ngày 1 đến 30
var dayNum = 1;
for (var week = 0; week < 5; week++) {
    document.write("<tr>");
    for (var d = 0; d < 7; d++) {
        if (dayNum <= 30) {
            document.write("<td>" + dayNum + "</td>");
            dayNum++;
        }
    }
    document.write("</tr>");
}

document.write("</table>");