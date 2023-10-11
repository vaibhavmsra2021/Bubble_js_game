function bubble()
{
    var clutter = "";
    for(var i=1;i<=100;i++)
    {
        var temp = Math.floor(Math.random()*10);
        clutter += `<div class="balls">${temp}</div>`;
    }
    document.querySelector("#panel_btm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var g_rand = 0;
var hitnumber;

function update_scr()
{
    score+=20;
    document.querySelector("#scoreval").textContent = score;
}

function tmr()
{
    var tmrint = setInterval(function() {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(tmrint);
            document.querySelector("#panel_btm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}


function getnewhit()
{
    g_rand = Math.floor(Math.random()*10); 
    document.querySelector("#hits").textContent = g_rand;
}

document.querySelector("#panel_btm").addEventListener("click", function(dets) {
    hitnumber = Number(dets.target.textContent);
    if(hitnumber == g_rand) {
        update_scr();
        getnewhit();
        bubble();
    }
});

bubble();
tmr();
getnewhit();