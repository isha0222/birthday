function start() { document.getElementById('music').play(); nextPage(2) }
function nextPage(p) {
    document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
    document.getElementById('page' + p).classList.add('active');
}
function goStart(){
    const music=document.getElementById('music');
    music.play().catch(()=>{});
    nextPage(1);
  }
function moveNo() { const b = document.getElementById('noBtn'); b.style.left = Math.random() * 90 + 'vw'; b.style.top = Math.random() * 90 + 'vh' }

function yesClick() {
    playFinalEffects();
    setTimeout(() => nextPage(5), 900);
}

let funnyStep = 0;
const funnyMessages = [
    "Do you know what day it is? 😏",
    "Are you ready for a surprise? 😳",
    "Okay okay... final time 😌"
];

function nextFunny() {
  funnyStep++;
  if (funnyStep < funnyMessages.length) {
      document.getElementById('funnyText').innerText = funnyMessages[funnyStep];
  } else {
      showCountdown(); // ✅ FIX
  }
}

let noScale = 1;
let yesScale = 1;

function shrinkNo() {
    const noBtn = document.getElementById('noBtn2');
    const yesBtn = document.getElementById('yesBtnFunny');

    noScale -= 0.2;
    yesScale += 0.15;

    if (noScale > 0.2) {
        noBtn.style.transform = `scale(${noScale})`;
        noBtn.style.opacity = noScale;
    } else {
        noBtn.style.display = 'none';
    }

    yesBtn.style.transform = `scale(${yesScale})`;
}

const text = "There may be countless stories… but ours is my forever favorite 💖✨❤️";
let i = 0;
function type() { if (i < text.length) { document.getElementById('typing').innerHTML += text.charAt(i); i++; setTimeout(type, 60) } }
function nextPage(p){
    document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
    document.getElementById('page'+p).classList.add('active');
  
    if(p===3){
      document.getElementById('typing').innerHTML="";
      i=0;
      type();
    }
  }

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 120);

function playFinalEffects() {
    if (navigator.vibrate) { navigator.vibrate([200, 100, 200, 100, 300]); }
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play();

    for (let i = 0; i < 40; i++) {
        const h = document.createElement('div');
        h.className = 'heart';
        h.innerHTML = '❤️';
        h.style.left = '50vw';
        h.style.top = '50vh';
        h.style.fontSize = (Math.random() * 30 + 15) + 'px';
        h.style.animationDuration = '1s';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);
    }
}




  const secretText = `I have something to tell you... ❤️

From the moment you came into my life,
everything became beautiful ✨

You are my peace, my happiness, my forever 💖

And no matter what happens,
I will always choose YOU 😘`;

let j = 0;

function typeSecret(){
  const el = document.getElementById("secretTyping");
  if(!el) return;

  if(j < secretText.length){
    // handle line breaks
    if(secretText[j] === "\n"){
      el.innerHTML += "<br>";
    } else {
      el.innerHTML += secretText[j];
    }
    j++;
    setTimeout(typeSecret, 50); // speed
  }
}

// Reset typing on page open
const oldNextPage = nextPage;
nextPage = function(p){
  oldNextPage(p);

  if(p === 7){
    const el = document.getElementById("secretTyping");
    if(el) el.innerHTML = "";
    j = 0;
    setTimeout(typeSecret, 500); // delay before typing
  }
};

// 🎬 COUNTDOWN PAGE SHOW
function showCountdown(){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('countdownPage').classList.add('active');
  startCountdown();
}

// ⏳ CINEMATIC COUNTDOWN
function startCountdown() {
  let count = 5;
  const countdownNumber = document.getElementById('countdownNumber');

  countdownNumber.textContent = count;

  const countInterval = setInterval(() => {
      count--;

      if (count > 0) {
          countdownNumber.textContent = count;

          countdownNumber.style.animation = 'none';
          setTimeout(() => {
              countdownNumber.style.animation = 'countdownPulse 0.8s ease-in-out';
          }, 10);

      } else {
          clearInterval(countInterval);

          flashEffect(); // ⚡ FLASH
          document.getElementById("music").play(); // 🎵 MUSIC DROP

          setTimeout(() => {
              nextPage(6); // ❤️ FINAL PAGE
          }, 600);
      }

  }, 1000);
}

// ⚡ FLASH EFFECT
function flashEffect() {
  const flash = document.createElement("div");

  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "white";
  flash.style.opacity = "1";
  flash.style.zIndex = "9999";
  flash.style.transition = "opacity 0.6s ease";

  document.body.appendChild(flash);

  setTimeout(() => flash.style.opacity = "0", 100);
  setTimeout(() => flash.remove(), 700);
}
