let count = 0;
let countMogu;
let mogus = [];

window.onload = function() {
    start();
}

function start() {

    mogus.push(document.getElementById("hoge"));
    
    mogus.forEach(mogu => {
        onMogutan(mogu);
        moveMogtan(mogu);
    });
}

function moveMogtan(mogu) {
    setTimeout(() => hiddenMogutan(mogu), Math.random() * 5 * 1000);
}

function onMogutan(mogu) {
    mogu.onclick = () => {
        // パス最後の/を取り除き、画像名を取得する
        const fileName = mogu.src.split('/').pop();
    };
}

// モグタンが隠れる処理
function hiddenMogutan(mogu) {
    mogu.src = "img/mogu_tan2.PNG";
}

// モグタンが現れる処理
function visibleMogutan() {
    
}