let count = 0;
let countMogu;
let mogus = [];

window.onload = function() {
    start();
}

function start() {

    mogus.push(document.getElementById("hoge"));
    
    mogus.forEach(mogu => {
        //onMogutan(mogu);
        moveMogtan(mogu);
    });
}

function moveMogtan(mogu) {
    //0.0 以上 1.0 未満のランダムな数値を生成
    setTimeout(() => visibleMogutan(mogu), Math.random() * 5 * 1000);
}

function onMogutan(mogu) {
    mogu.onclick = () => {
        // パス最後の/を取り除き、画像名を取得する
        const fileName = mogu.src.split('/').pop();
        if (fileName === "") {
            countMogu.innerHTML = count;
        }
    };
}

// モグタンが隠れる処理
function hiddenMogutan(mogu) {

}

// モグタンが現れる処理
function visibleMogutan(mogu) {
    mogu.src = "";
}