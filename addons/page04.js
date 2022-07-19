window.onload = function () {
    // 創造初始圖片
    // document.getElementById("img01").src = "./galaxy0.png";

    // binding 移入與移出的觸發函數
    document.getElementById("img01").addEventListener("mouseover", mouseOver);
    document.getElementById("img01").addEventListener("mouseout", activeFunc);
    document.getElementById("prev").addEventListener("click", clickPrev);
    document.getElementById("next").addEventListener("click", clickNext);
    document.getElementById("midd").addEventListener("click", middButton);
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`td${i}`).addEventListener("click", clickMenu);
    }

    // 驅動循環
    setClock();
    timer = window.setInterval(setClock, 1000);

}

// 設定初始Global變數
var idx = 0;
var connectidx = 1;
var urlArray = [
    "https://reurl.cc/WrvrgD",
    "https://reurl.cc/M0y0gL",
    "https://reurl.cc/A707lK",
    "https://reurl.cc/b2l2o3"
];

function setClock() {
    //建立日期
    // let tmpSec = new Date().getSeconds(); //此列為初始測試用
    //計算秒數對應的圖檔
    // let tmpQuotion = tmpSec % 4; //此列為初始測試用
    // console.log(tmpQuotion);
    // document.getElementById("img01").src = `./galaxy${tmpQuotion}.png`;
    // document.getElementById(`td${tmpQuotion}`).style.color = "black";
    // document.getElementById(`td${tmpQuotion}`).style.backgroundColor = "white";
    if (idx >= 4) idx = 0;
    document.getElementById("img01").src = `./galaxy${idx}.png`;
    document.getElementById("imgLink").setAttribute("href", urlArray[`${idx}`]);
    document.getElementById(`td${idx}`).style = "color:black;background-color:white";
    // document.getElementById(`td${idx}`).style.backgroundColor = "white";
    if (idx != 0) {
        document.getElementById(`td${idx - 1}`).style = "color:white;background-color:black";
    } else {
        document.getElementById(`td${3}`).style = "color:white;background-color:black";
    }
    idx += 1;
}

function activeFunc() {
    if (connectidx == 1) timer = window.setInterval(setClock, 1000);
}

function mouseOver() {
    window.clearInterval(timer);
}

function clickMenu() {
    window.clearInterval(timer);

    let selidx = parseInt(this.id.charAt(2));

    document.getElementById("img01").src = `./galaxy${selidx}.png`;
    document.getElementById("imgLink").setAttribute("href", urlArray[`${selidx}`]);
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`td${i}`).style = "color:white;background-color:black";
    }
    document.getElementById(`td${selidx}`).style = "color:black;background-color:white";
    idx = selidx;
    activeFunc();
}

function clickPrev() {
    connectidx = 0;
    window.clearInterval(timer);
    // console.log(`idx is : ${idx}`);
    // console.log(`Prev-idx is : ${Math.max(idx - 2, 0)}`);
    let previdx = Math.max(idx - 2, 0);
    document.getElementById("img01").src = `./galaxy${previdx}.png`;
    document.getElementById("imgLink").setAttribute("href", urlArray[`${previdx}`]);
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`td${i}`).style = "color:white;background-color:black";
    }
    document.getElementById(`td${previdx}`).style = "color:black;background-color:white";

    idx = previdx + 1;
    document.getElementById("midd").innerHTML = "Start";
    document.getElementById("midd").style = "color:black;background-color:white";

}

function clickNext() {
    connectidx = 0;
    window.clearInterval(timer);
    // console.log(`idx is : ${idx}`);
    // console.log(`Next-idx is : ${Math.min(idx, 3)}`);
    let nextidx = Math.min(idx, 3);
    document.getElementById("img01").src = `./galaxy${nextidx}.png`;
    document.getElementById("imgLink").setAttribute("href", urlArray[`${nextidx}`]);
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`td${i}`).style = "color:white;background-color:black";
    }
    document.getElementById(`td${nextidx}`).style = "color:black;background-color:white";
    // console.log(`After change idx is : ${idx}`);
    // console.log(`After change Next-idx is : ${Math.min(idx, 3)}`);
    idx = nextidx + 1;
    document.getElementById("midd").innerHTML = "Start";
    document.getElementById("midd").style = "color:black;background-color:white";

}


function middButton() {
    if (connectidx == 0) {
        connectidx = 1;
        activeFunc();
        document.getElementById("midd").innerHTML = "Stop";
        document.getElementById("midd").style = "color:white;background-color:black";
    } else {
        connectidx = 0;
        window.clearInterval(timer);
        document.getElementById("midd").innerHTML = "Start";
        document.getElementById("midd").style = "color:black;background-color:white";
    }
}
