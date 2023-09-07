var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}
function decreaseScore() {
    score -= 10;
    document.querySelector("#score").textContent = score;
}
function makeBubble() {
    var clutter = "";
    for (var i = 1; i < 180; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;

}

function changeHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hitrn;

}
function runTimer() {
    var timer1 = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer;
        }
        else {
            clearInterval(timer1)
            document.querySelector(".panel-bottom").innerHTML = `<h1 align=center>Game Over Score=${score}</h1>`;
        }
    }, 1000);

}

document.querySelector(".panel-bottom").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum == hitrn) {
        increaseScore();
        changeHit();
        makeBubble();

    }
    else {
        decreaseScore();
    }

});
runTimer();
makeBubble();
changeHit();