// ==============================
// PLAY SONG
// ==============================

function playSong() {

    let song = document.getElementById("song");

    song.play();

}

function stopSong() {

    let song = document.getElementById("song");

    song.pause();

    song.currentTime = 0;

}

// ==============================
// TYPING MESSAGE
// ==============================

const message = `💙 My Dear Brother,

No matter how many days pass, I still miss you every single day.
Life feels incomplete without your smile and your voice.
Every memory we created together lives forever in my heart.
Sometimes I smile remembering our funny moments.
Sometimes I cry because I wish you were here.
Distance may separate us, but it can never break our bond.
Thank you for always caring for me and standing by my side.
I pray that you're always happy, healthy, and safe.
I'm waiting for the day I can see you again.
Until then, you'll always have a special place in my heart.

❤️ I Miss You So Much brother!!...`;

let index = 0;

function typeWriter(){

if(index < message.length){

document.getElementById("typing").innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,40);

}

}

window.onload = function(){

typeWriter();

calculateDays();

welcomeMessage();

}

// ==============================
// DAYS COUNTER
// ==============================

// Change this date to the day you last met him

const lastMet = new Date("2026-06-27");

function calculateDays(){

const today = new Date();

const difference = today - lastMet;

const days = Math.floor(difference/(1000*60*60*24));

document.getElementById("daysCounter").innerHTML =

days + " Days";

}

// ==============================
// REPLY SECTION
// ==============================

function sendReply(){

let text = document.getElementById("reply").value;

if(text==""){

document.getElementById("showReply").innerHTML="🥺 Waiting for your reply...";

}

else{

document.getElementById("showReply").innerHTML=

"💌 Your Reply ❤️<br><br>"+text;

}

}

// ==============================
// WELCOME POPUP
// ==============================

function welcomeMessage(){

setTimeout(function(){

alert("❤️ Welcome ❤️\n\nForever My Brother\n\nThis page is made with lots of love and memories.");

},800);

}

// ==============================
// SMOOTH SCROLL EFFECT
// ==============================

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ==============================
// HEARTS ANIMATION
// ==============================

setInterval(function(){

let heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="floatUp 6s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},6000);

},700);

// ==============================
// FLOAT HEART STYLE
// ==============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatUp{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);