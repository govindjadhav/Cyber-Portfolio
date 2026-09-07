/* =========================================
   GOVIND JADHAV PORTFOLIO - FINAL SCRIPT
========================================= */

/* =========================
   Typing Animation
========================= */

const roles = [
  "Cybersecurity Engineer",
  "Application Security",
  "DevSecOps Engineer",
  "Penetration Tester",
  "Cloud Security Engineer",
  "SOC Analyst",
  "Ethical Hacker",
  "Red Team Operator",
  "Blue Team Analyst",
  "Bug Bounty Hunter"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("type");

function typingEffect(){

  if(!typingElement) return;

  typingElement.textContent =
  roles[roleIndex].substring(0,charIndex);

  if(!deleting){

    charIndex++;

    if(charIndex > roles[roleIndex].length){

      deleting = true;
      setTimeout(typingEffect,1000);
      return;

    }

  }else{

    charIndex--;

    if(charIndex===0){

      deleting=false;
      roleIndex=(roleIndex+1)%roles.length;

    }

  }

  setTimeout(typingEffect,deleting?45:85);

}

typingEffect();

/* =========================
   Cyber Background Animation
========================= */

const canvas=document.getElementById("bg");

if(canvas){

const ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const PARTICLE_COUNT=85;

const particles=Array.from({length:PARTICLE_COUNT},()=>({

x:Math.random()*window.innerWidth,
y:Math.random()*window.innerHeight,
vx:(Math.random()-.5)*0.45,
vy:(Math.random()-.5)*0.45

}));

function animateBackground(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#5eead4";

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
ctx.fill();

});

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

const dx=particles[i].x-particles[j].x;
const dy=particles[i].y-particles[j].y;
const distance=Math.hypot(dx,dy);

if(distance<120){

ctx.strokeStyle=`rgba(94,234,212,${
(1-distance/120)*0.22
})`;

ctx.beginPath();
ctx.moveTo(particles[i].x,particles[i].y);
ctx.lineTo(particles[j].x,particles[j].y);
ctx.stroke();

}

}

}

requestAnimationFrame(animateBackground);

}

animateBackground();

}

/* =========================
   PDF Preview Modal
========================= */

const pdfModal=document.getElementById("pdfModal");
const pdfFrame=document.getElementById("pdfFrame");
const closePdf=document.getElementById("closePdf");

document.querySelectorAll(".previewBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

pdfFrame.src=btn.dataset.pdf;
pdfModal.style.display="block";
document.body.style.overflow="hidden";

});

});

function closePDF(){

pdfModal.style.display="none";
pdfFrame.src="";
document.body.style.overflow="auto";

}

if(closePdf){

closePdf.onclick=closePDF;

}

window.addEventListener("click",e=>{

if(e.target===pdfModal){

closePDF();

}

});

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

closePDF();

}

});

/* =========================
   Support Popup
========================= */

const paymentModal=document.getElementById("paymentModal");
const openPayment=document.getElementById("openPayment");
const closePayment=document.getElementById("closePayment");
const copyUPI=document.getElementById("copyUPI");

if(openPayment){

openPayment.onclick=()=>{

paymentModal.style.display="block";
document.body.style.overflow="hidden";

};

}

function closeSupport(){

paymentModal.style.display="none";
document.body.style.overflow="auto";

}

if(closePayment){

closePayment.onclick=closeSupport;

}

window.addEventListener("click",e=>{

if(e.target===paymentModal){

closeSupport();

}

});

if(copyUPI){

copyUPI.onclick=async()=>{

try{

await navigator.clipboard.writeText("8668532705@ybl");

copyUPI.innerHTML="Copied ✓";

setTimeout(()=>{

copyUPI.innerHTML="Copy UPI ID";

},2000);

}catch{

alert("UPI ID: 8668532705@ybl");

}

};

}

/* =========================
   Scroll Reveal Animation
========================= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll("main section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(35px)";
sec.style.transition="all .8s ease";

observer.observe(sec);

});

/* =========================
   Resource Card Glow
========================= */

document.querySelectorAll(".resource-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,229,255,.12),
#07101f)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="linear-gradient(180deg,#0b1325,#07101f)";

});

});

/* =========================
   Active Navbar Link
========================= */

const sections=document.querySelectorAll("main section");

const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-120;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* =========================
   Console Signature
========================= */

console.log("%cGovind Jadhav Portfolio",
"color:#00E5FF;font-size:20px;font-weight:bold;");

console.log("%cCybersecurity Engineer | DevSecOps | Application Security",
"color:white;");
