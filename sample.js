let count = 0;
let countMogu;
let mogus = [];

window.onload = function() {
    start();
}

function start() {

    mogus.push(document.getElementById("image_mogu1"));
    mogus.push(document.getElementById("image_mogu2"));
    mogus.push(document.getElementById("image_mogu3"));
    mogus.push(document.getElementById("image_mogu4"));
    mogus.push(document.getElementById("image_mogu5"));
    mogus.push(document.getElementById("image_mogu6"));
    mogus.push(document.getElementById("image_mogu7"));
    mogus.push(document.getElementById("image_mogu8"));
    mogus.push(document.getElementById("image_mogu9"));
    
    mogus.forEach(mogu => {
        onMogutan(mogu);
        moveMogtan(mogu);
    });
}

function moveMogtan(mogu) {
    setTimeout(() => visibleMogutan(mogu), Math.random() * 5 * 1000);
}

function onMogutan(mogu) {
    mogu.onclick = () => {
        // パス最後の/を取り除き、画像名を取得する
        const fileName = mogu.src.split('/').pop();
        if (fileName === "mogu_tan2.PNG") {
            mogu.src = "img/mogu_tan3.PNG";
            count ++;
            countMogu = document.getElementById("countMogu");
            countMogu.innerHTML = count;
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