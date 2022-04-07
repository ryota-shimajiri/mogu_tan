let mogutan;
let count = 0;
let count_mogu;

window.onload = function() {
    start();
}

function start() {
    mogu1 = document.getElementById("image_mogu1");
    mogu2 = document.getElementById("image_mogu2");
    mogu3 = document.getElementById("image_mogu3");
    mogu4 = document.getElementById("image_mogu4");
    mogu5 = document.getElementById("image_mogu5");
    mogu6 = document.getElementById("image_mogu6");
    mogu7 = document.getElementById("image_mogu7");
    mogu8 = document.getElementById("image_mogu8");
    mogu9 = document.getElementById("image_mogu9");

    onMogutan(mogu1);
    onMogutan(mogu2);
    onMogutan(mogu3);
    onMogutan(mogu4);
    onMogutan(mogu5);
    onMogutan(mogu6);
    onMogutan(mogu7);
    onMogutan(mogu8);
    onMogutan(mogu9);
    
    moveMogtan(mogu1);
    moveMogtan(mogu2);
    moveMogtan(mogu3);
    moveMogtan(mogu4);
    moveMogtan(mogu5);
    moveMogtan(mogu6);
    moveMogtan(mogu7);
    moveMogtan(mogu8);
    moveMogtan(mogu9);
}

function moveMogtan(mogu) {
    setTimeout(() => hiddenMogutan(mogu), Math.random() * 5 * 1000);
}

function onMogutan(mogu) {
    mogu.onclick = () => {
        // パス最後の/を取り除き、画像名を取得する
        let fileName = mogu.src.split('/').pop();
        if (fileName === "mogu_tan2.PNG") {
            mogu.src = "img/mogu_tan3.PNG";
            count ++;
            count_mogu = document.getElementById("count_mogu");
            count_mogu.innerHTML = count;
        }
    };
}

// モグタンが隠れる処理
function hiddenMogutan(mogu) {
    mogu.src = "img/mogu_tan1.PNG";
    setTimeout(() => visibleMogutan(mogu), Math.random() * 5 * 1000);
}

// モグタンが現れる処理
function visibleMogutan(mogu) {
    mogu.src = "img/mogu_tan2.PNG";
    setTimeout(() => hiddenMogutan(mogu), Math.random() * 5 * 1000);
}