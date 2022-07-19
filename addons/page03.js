document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i <= 4; i++) {
        document.getElementById(i).src = "./star.png";
    }

    for (let i = 0; i <= 4; i++) {
        document.getElementById(i).addEventListener("mouseover", mouseOver);
        document.getElementById(i).addEventListener("mouseout", mouseOut);
        document.getElementById(i).onclick = finalClick;
        document.getElementById(i).ondblclick = restartClick;
    }

    stmt = new Array();
    stmt[1] = "◢▆▅▄▃ 崩╰(〒皿〒)╯潰▃▄▅▆◣";
    stmt[2] = "╯-____-)╯~═╩════╩═~";
    stmt[3] = "╮(╯_╰)╭";
    stmt[4] = "\\⊙▽⊙/";
    stmt[5] = "<(￣︶￣)>";

    detectIndex = false;
});

function mouseOver() {

    if (detectIndex == false) {
        let curIndex = this.id;
        for (var i = 0; i <= curIndex; i++) {
            document.getElementById(i).className = "n";
        }
        document.getElementById("idsp").innerHTML = "打分中..." + (i) + "顆星";
    }

}


function mouseOut() {

    if (detectIndex == false) {
        let curIndex = this.id;

        for (let i = 0; i <= curIndex; i++) {
            document.getElementById(i).className = "s";
        }
        document.getElementById("idsp").innerHTML = "Give your score plz !";
    }

}


function finalClick() {
    let curIndex = this.id;
    if (curIndex < 5 && detectIndex == false) {
        for (var k = 0; k <= curIndex; k++) {
            console.log(k);
        }
        // let imgs = document.querySelectorAll("img");
        // let imgsLen = imgs.length;

        // for (let j = 0; j < imgsLen; j++) {
        //     imgs[j].id += 5;

        // }


        document.getElementById("idsp").innerHTML = stmt[k] + "<br> 你的評價最後是 : " + (k) + "顆星";
        detectIndex = true;

    } else {
        document.getElementById("idsp").innerHTML = "評分已完成，然後不要再點了! <br> ( ‵□′)───C＜─___-)|||";
    }

}


function restartClick() {
    let imgs = document.querySelectorAll("img");
    let imgsLen = imgs.length;
    for (let m = 1; m <= 5; m++) {
        imgs[m].id = m - 1;
        imgs[m].src = "./star.png";
    }
    document.getElementById("idsp").innerHTML = "Reset!";
    detectIndex = false;
}