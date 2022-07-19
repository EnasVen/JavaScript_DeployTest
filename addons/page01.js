document.write("<div><article><table ><tr>");


for (var i = 1; i <= 9; i++) {

    document.write("<td>");
    for (var j = 1; j <= 9; j++) {
        document.write((Array(2).join("0") + i).slice(-2) + "*" + (Array(2).join("0") + j).slice(-2) + "=" + (Array(2).join("0") + i * j).slice(-2) + "<br>");
        // document.write(i + "*" + j + "="  + i * j + "<br>");
    }
    document.write("</td>");
}

document.write("</tr></table></article></div>");