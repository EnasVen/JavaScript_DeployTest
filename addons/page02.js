// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("idPwd").onblur = chkPwd;
//     document.getElementById("A").innerHTML = "(1.不可空白，2.至少兩個字以上，3.必須全部為中文字)<br><hr>";
//     document.getElementById("B").innerHTML = "(1.不可空白，2.至少6個字且必須包含英文字母、數字、特殊字元[!@#$%^&*])<br><hr>";
//     document.getElementById("C").innerHTML = "(格式:西元年/月/日 yyyy/MM/dd)<br><hr>";
//     document.getElementById("idName").onblur = chkName;
//     // document.getElementById("idDate").onblur = chkDate;
// });

window.onload = function () {
    document.getElementById("idPwd").onblur = chkPwd;
    document.getElementById("A").innerHTML = "(1.不可空白，2.至少兩個字以上，3.必須全部為中文字)<br><hr>";
    document.getElementById("B").innerHTML = "(1.不可空白，2.至少6個字且必須包含英文字母、數字、特殊字元[!@#$%^&*])<br><hr>";
    document.getElementById("C").innerHTML = "(格式:西元年/月/日 yyyy/MM/dd hh:mm:ss)<br><hr>";
    document.getElementById("idName").onblur = chkName;
    document.getElementById("idDate").onblur = chkDate;
}



function chkName() {
    let theName = document.getElementById("idName").value;
    let theNameLen = theName.length;
    let flag1 = false;

    if (theName == "") {
        document.getElementById("idN").innerHTML = "<img src='./error.png'/> 不可空白";
        document.getElementById("idN").style.color = "red";
        document.getElementById("idName").style.backgroundColor = "LightCoral";
    } else if (theNameLen >= 2) {

        for (var i = 0; i < theNameLen; i++) {
            var strName = theName.charCodeAt(i);
            if (strName >= 0x4e00 && strName <= 0x9fff) {
                flag1 = true;
            } else {
                flag1 = false
                break;
            }
        }

        if (flag1) {
            document.getElementById("idN").innerHTML = "<img src='./ok.png'/> <span style='color:green;'>輸入正確!</span>";
            // document.getElementById("idN").style.color = "green";
            document.getElementById("idName").style.backgroundColor = "LightGreen";
        } else {
            document.getElementById("idN").innerHTML = "<img src='./error.png'/> 必須全部為中文字";
            document.getElementById("idN").style.color = "red";
            document.getElementById("idName").style.backgroundColor = "LightCoral";
        }

    } else {
        document.getElementById("idN").innerHTML = "<img src='./error.png'/> 至少兩個字以上";
        document.getElementById("idN").style.color = "red";
        document.getElementById("idName").style.backgroundColor = "LightCoral";
    }

}


function chkPwd() {
    // 定位tag
    var tmpObj = document.getElementById("idPwd");
    console.log(tmpObj);
    // 解析屬性
    var tmpObjVal = tmpObj.value;
    console.log(tmpObjVal);
    // 獲得內容文字長度
    var tmpObjValLen = tmpObjVal.length;
    console.log(tmpObjValLen);

    // 定位顯示文字span
    var displaySpan = document.getElementById("idP");
    var flag1 = false, flag2 = false, flag3 = false;
    var re = new RegExp("[!@#$%^&*]");
    // 執行檢查
    if (tmpObjVal == "") {
        displaySpan.innerHTML = "<img src='./error.png'/> 不可輸入空白!";
        displaySpan.style = "color:red;";
    } else if (tmpObjValLen < 6) {
        displaySpan.innerHTML = "<img src='./error.png'/> 至少輸入6個字元!";
        displaySpan.style = "color:red;";
    } else {
        for (var i = 0; i < tmpObjValLen; i++) {
            var PwdChar = tmpObjVal.substr(i, 1).toUpperCase();
            if (PwdChar >= "A" && PwdChar <= "Z")
                flag1 = true;
            else if (PwdChar >= "0" && PwdChar <= "9")
                flag2 = true;
            else if (re.test(tmpObjVal)) {
                flag3 = true;
            } else {
                //  do nothing
            }
            if (flag1 && flag2 && flag3) break;

        }

        if (flag1 && flag2 && flag3) {
            document.getElementById("idP").innerHTML = "<img src='./ok.png'/> 輸入正確!";
            displaySpan.style = "color:green;";
        } else {
            document.getElementById("idP").innerHTML = "<img src='./error.png'/> 輸入錯誤!";
            displaySpan.style = "color:red;";
        }
    }
}

function isValidDate(x) {
    return new Date(x).toString() !== 'Invalid Date';
}

function chkDate() {
    //取得元素值
    let theDate = document.getElementById("idDate").value;
    let reD = /^[1-9]{1}\d{0,3}\/\d{2}\/\d{2}\s([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

    if (theDate == "") {
        document.getElementById("idD").innerHTML = "<img src='./error.png'/> 日期欄位不能空白!";
        document.getElementById("idD").style = "color:red;";
    } else {
        if (reD.test(theDate)) {
            if (isValidDate(theDate)) {

                defaultMth = (Array(2).join(0) + [new Date(theDate).getMonth() + 1]).slice(-2);
                console.log(defaultMth);
                console.log(theDate.slice(5, 7));

                if (defaultMth != theDate.slice(5, 7)) {
                    document.getElementById("idD").innerHTML = "<img src='./error.png'/> 格式錯誤!";
                    document.getElementById("idD").style = "color:red;";
                } else {
                    document.getElementById("idD").innerHTML = "<img src='./ok.png'/> 輸入正確!";
                    document.getElementById("idD").style = "color:green;";
                }


            } else {
                document.getElementById("idD").innerHTML = "<img src='./error.png'/> 不存在的時間!";
                document.getElementById("idD").style = "color:red;";
            }

        } else {
            document.getElementById("idD").innerHTML = "<img src='./error.png'/> 格式錯誤!";
            document.getElementById("idD").style = "color:red;";
        }

    }

}    