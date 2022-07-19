window.onload = selectf;

function selectf() {


    let objSelect1 = document.getElementById("s1");
    let objSelect2 = document.getElementById("s2");
    let objSelect3 = document.getElementById("s3");
    objSelect1.onblur = chk1;
    objSelect2.onblur = chk1;
    objSelect3.onblur = chk2;
    let optName, optValue;

    // 年份下拉表單
    for (let i = 2010; i <= 2025; i++) {
        let optName = i;
        let optValue = i;
        let objOption = new Option(optName, optValue);
        objSelect1.add(objOption);
    }
    // 月份下拉表單
    for (let i = 1; i <= 12; i++) {
        let optName = i;
        let optValue = i;
        let objOption = new Option(optName, optValue);
        objSelect2.add(objOption, i);
    }
    // 日期下拉表單
    for (let i = 1; i <= 31; i++) {
        let optName = i;
        let optValue = i;
        let objOption = new Option(optName, optValue);
        objSelect3.add(objOption, i);
    }

    // // 設定初始選擇為null
    // for (let i = 0; i <= 2; i++) {
    //     document.getElementsByTagName("select")[i].selectedIndex = -1;
    // }

}



function chk2() {
    let inputYear = document.getElementById("s1").value;
    let inputMonth = document.getElementById("s2").value;
    let inputDay = document.getElementById("s3").value;
    document.getElementById("sp1").innerHTML = "您選擇的日期為 " + inputYear + " 年 " + inputMonth + " 月 " + inputDay + " 日 !";
    // 取得每月的第一天是星期幾
    var k1 = new Date(parseInt(inputYear), parseInt(inputMonth) - 1, 1).getDay();
    var k2 = new Date(parseInt(inputYear), parseInt(inputMonth), 0).getDay();
    var k3 = inputDay;
    var trueDays = new Date(parseInt(inputYear), parseInt(inputMonth), 0).getDate();
    console.log(`本月第一天是星期:${k1},需要創造${k1 - 0}個空白li ;最後一天為星期${k2},需要創造${6 - k2}個空白li`);
    createCalendar(k1, k2, k3, trueDays);
}

function chk1() {
    let inputYear = document.getElementById("s1").value;
    let inputMonth = document.getElementById("s2").value;
    //alert(inputMonth);
    //alert(inputYear)

    let d = new Date(parseInt(inputYear), parseInt(inputMonth), 0);  // 3月的第0天,2月的最後1天\
    var trueDays = d.getDate();
    //alert(trueDays);

    let objSelect3 = document.getElementById("s3");
    let t = objSelect3.length;

    //    第1種方法
    let tmpDateValue = document.getElementById('s3').value;
    document.getElementById('s3').options.length = 0;
    for (let i = 1; i <= 31; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('s3').appendChild(opt);
    }
    document.getElementById('s3').options.length = trueDays;

    if (tmpDateValue > trueDays) {

        let inputDay = document.getElementById("s3").value;
        document.getElementById("sp1").innerHTML = "您選擇的日期為 " + inputYear + " 年 " + inputMonth + " 月 " + inputDay + " 日 !";
        // 取得每月的第一天是星期幾
        var k1 = new Date(parseInt(inputYear), parseInt(inputMonth) - 1, 1).getDay();
        var k2 = new Date(parseInt(inputYear), parseInt(inputMonth), 0).getDay();
        var k3 = inputDay;
        // console.log(`本月第一天是星期:${k1},需要創造${k1 - 0}個空白li ;最後一天為星期${k2},需要創造${6 - k2}個空白li`);
        createCalendar(k1, k2, k3, trueDays);

    } else {
        document.getElementById('s3').value = tmpDateValue;
        let inputDay = document.getElementById("s3").value;
        document.getElementById("sp1").innerHTML = "您選擇的日期為 " + inputYear + " 年 " + inputMonth + " 月 " + inputDay + " 日 !";

        // 取得每月的第一天是星期幾
        var k1 = new Date(parseInt(inputYear), parseInt(inputMonth) - 1, 1).getDay();
        var k2 = new Date(parseInt(inputYear), parseInt(inputMonth), 0).getDay();
        var k3 = inputDay;
        // console.log(`本月第一天是星期:${k1},需要創造${k1 - 0}個空白li ;最後一天為星期${k2},需要創造${6 - k2}個空白li`);
        createCalendar(k1, k2, k3, trueDays);
    }

}

function createCalendar(k1, k2, k3, trueDays) {

    // 階段0:重置table
    document.getElementById("tb1").innerHTML = "";
    document.getElementById("tb0").innerHTML = "";

    // 階段1:建立初始標題列
    var tmpObj = document.getElementById("tb0");
    weekDayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 6; i++) {
        var tmpRow = document.createElement('tr');
        weekDayArray.forEach(function (cellData) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            cell.setAttribute("class", "headCell");
            tmpRow.appendChild(cell);
        })
    }
    tmpObj.appendChild(tmpRow);

    // 階段2:建立天數陣列[1,2,3...trueDays]
    let daysArray = new Array(k1).fill("").concat([...Array(trueDays + 1).keys()].slice(1), new Array((6 - k2)).fill(""));
    console.log(daysArray);

    // 階段3:針對每一個陣列元素建立tr+td
    for (let i = 1; i <= Math.ceil((trueDays + k1 + k2) / 7); i++) {
        var c = 0;
        while (c != 7) {
            c += 1;
            let tmpArray = daysArray.slice((i - 1) * 7, i * 7);
            var row = document.createElement('tr');
            tmpArray.forEach(function (cellData) {
                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                if (cellData == k3) {
                    cell.setAttribute("class", "tdCellSelected");
                } else if (cellData == "") {
                    cell.setAttribute("class", "tdCellEmpty");
                } else {
                    cell.setAttribute("class", "tdCell");
                }

                row.appendChild(cell);
            })

        }
        document.getElementById("tb1").appendChild(row);
    }


}