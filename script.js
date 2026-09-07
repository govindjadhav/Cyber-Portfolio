/* ==========================================
   GOVIND JADHAV PORTFOLIO V2
========================================== */

/* ========== Typing Animation ========== */

const roles = [
  "Cybersecurity Engineer",
  "Application Security",
  "DevSecOps Engineer",
  "Penetration Tester",
  "Cloud Security Engineer",
  "SOC Analyst",
  "Ethical Hacker",
  "Bug Bounty Hunter"
];

let role = 0;
let letter = 0;
let erase = false;

const typing = document.getElementById("type");

function typeEffect(){

if(!typing) return;

typing.textContent = roles[role].substring(0,letter);

if(!erase){

letter++;

if(letter > roles[role].length){

erase = true;

setTimeout(typeEffect,1000);

return;

}

}else{

letter--;

if(letter===0){

erase=false;

role=(role+1)%roles.length;

}

}

setTimeout(typeEffect,erase?45:80);

}

typeEffect();

/* ========== Cyber Background ========== */

const canvas=document.getElementById("bg");

if(canvas){

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[...Array(85)].map(()=>({

x:Math.random()*innerWidth,
y:Math.random()*innerHeight,
vx:(Math.random()-.5)*0.5,
vy:(Math.random()-.5)*0.5

}));

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#5eead4";

particles.forEach(p=>{

p.x+=p.vx;

p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;

if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,1.6,0,Math.PI*2);

ctx.fill();

});

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

const dx=particles[i].x-particles[j].x;

const dy=particles[i].y-particles[j].y;

const dist=Math.hypot(dx,dy);

if(dist<120){

ctx.strokeStyle=`rgba(94,234,212,${(1-dist/120)*0.22})`;

ctx.beginPath();

ctx.moveTo(particles[i].x,particles[i].y);

ctx.lineTo(particles[j].x,particles[j].y);

ctx.stroke();

}

}

}

requestAnimationFrame(draw);

}

draw();

}

/* ========== PDF Preview ========== */

const pdfModal=document.getElementById("pdfModal");
const pdfFrame=document.getElementById("pdfFrame");
const closePdf=document.getElementById("closePdf");

document.querySelectorAll(".previewBtn").forEach(btn=>{

btn.onclick=()=>{

pdfFrame.src=btn.dataset.pdf;

pdfModal.style.display="block";

document.body.style.overflow="hidden";

};

});

function closePDF(){

if(!pdfModal)return;

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

/* ========== Support Popup ========== */

const support=document.getElementById("paymentModal");
const openSupport=document.getElementById("openPayment");
const closeSupport=document.getElementById("closePayment");
const copy=document.getElementById("copyUPI");

if(openSupport){

openSupport.onclick=()=>{

support.style.display="block";

document.body.style.overflow="hidden";

};

}

function hideSupport(){

support.style.display="none";

document.body.style.overflow="auto";

}

if(closeSupport){

closeSupport.onclick=hideSupport;

}

window.addEventListener("click",e=>{

if(e.target===support){

hideSupport();

}

});

if(copy){

copy.onclick=async()=>{

try{

await navigator.clipboard.writeText("8668532705@ybl");

copy.innerHTML="Copied ✓";

setTimeout(()=>{

copy.innerHTML="Copy UPI ID";

},1800);

}catch{

alert("UPI ID: 8668532705@ybl");

}

};

}

/* ========== Scroll Reveal ========== */

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

/* ========== Animated Counters ========== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=entry.target;

const target=+el.dataset.target;

let num=0;

const step=Math.max(1,target/60);

const run=()=>{

num+=step;

if(num<target){

el.textContent=Math.floor(num);

requestAnimationFrame(run);

}else{

el.textContent=target;

}

};

run();

counterObserver.unobserve(el);

}

});

});

counters.forEach(c=>counterObserver.observe(c));

/* ========== Resource Card Glow ========== */

document.querySelectorAll(".resource-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const r=card.getBoundingClientRect();

const x=e.clientX-r.left;

const y=e.clientY-r.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(0,229,255,.14),

#07101f)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="linear-gradient(180deg,#0b1325,#07101f)";

});

});

/* ========== Active Navbar ========== */

const sections=document.querySelectorAll("main section");

const nav=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

if(pageYOffset>=sec.offsetTop-120){

current=sec.id;

}

});

nav.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ========== Profile Parallax ========== */

const profile=document.querySelector(".profile-img");

document.addEventListener("mousemove",e=>{

if(!profile)return;

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*12;

profile.style.transform=`translate(${x}px,${y}px)`;

});

/* ========== Keyboard Shortcuts ========== */

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

closePDF();

hideSupport();

}

});

/* ========== Console Branding ========== */

console.log("%cGovind Jadhav Portfolio","color:#00E5FF;font-size:22px;font-weight:bold");

console.log("%cApplication Security • DevSecOps • Cybersecurity","color:white");
