/* Jitendra Nath Chanddra 
Practice Work 
JavaScript Bacis Task
linkedln Profile : www.linkedin.com/in/jitendra-nath-chandra-1657081b1
 */
var timer = 30;
var score = 0;
var hitrn = 0;

//jispe click karoge woh element par event raise hoga, aur event listener na milne par event element k parent par listener dhudhega, waha v naa milne par event perent ke parent ke parent paar dhudega parent 

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {

    var clutter = "";

    for (var i = 1; i <= 188; i++) {
        var rn = Math.floor(Math.random() * 10)
        /* Math.random() --> its generates the random no, *10 --> we get the point no, to remove the point we used math.floor */

        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtn").innerHTML = clutter;

}

function runTimer() {
    var timerint = setInterval;
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1>Game Over</h1>`;
            // alert("Time Out");
        }
    }, 1000);
}
document.querySelector("#pbtn").addEventListener("click",function(dets){
    // console.log(Number(dets.target.textContent));
    /* textContaend -> give the text part
    number-> convert string to integer */ 
    // alert("chalche");
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

runTimer();
makeBubble();
getNewHit();
// increaseScore();
