let btn = document.getElementById("launchBtn");
let countdownText = document.getElementById("countdown");
let video = document.getElementById("teaser");

btn.onclick = function(){

btn.style.display = "none";

let count = 10;

countdownText.innerHTML = count;

let timer = setInterval(function(){

count--;

countdownText.innerHTML = count;

if(count === 0){

clearInterval(timer);

countdownText.innerHTML = "Trailer Launch 🚀";

video.style.display = "block";

document.getElementById("trailer").scrollIntoView({
behavior:"smooth"
});

video.play();

}

},1000);

};