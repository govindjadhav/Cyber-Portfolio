/* =========================================
   GOVIND JADHAV PORTFOLIO SCRIPT
========================================= */

/* ========= Typing Animation ========= */

const roles=[
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

let roleIndex=0;
let charIndex=0;
let deleting=false;

const typingElement=document.getElementById("type");

function typingEffect(){

if(!typingElement) return;

typingElement.textContent=
roles[roleIndex].substring(0,charIndex);

if(!deleting){

charIndex++;

if(charIndex>roles[roleIndex].length){

deleting=true;

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

setTimeout(typingEffect,deleting?50:90);

}

typingEffect();

/* ========= Cyber Background ========= */

const canvas=document.getElementById("bg");

if(canvas){

const ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const particles=Array.from({length:90},()=>({

x:Math.random()*window.innerWidth,
y:Math.random()*window.innerHeight,
vx:(Math.random()-.5)*0.5,
vy:(Math.random()-.5)*0.5

}));

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#5eead4";

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.fillRect(p.x,p.y,2,2);

});

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

const dx=particles[i].x-particles[j].x;
const dy=particles[i].y-particles[j].y;
const dist=Math.hypot(dx,dy);

if(dist<120){

ctx.strokeStyle=`rgba(94,234,212,${(1-dist/120)*.25})`;

ctx.beginPath();

ctx.moveTo(particles[i].x,particles[i].y);
ctx.lineTo(particles[j].x,particles[j].y);

ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();

}

/* ========= Support Popup ========= */

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

if(paymentModal){

paymentModal.style.display="none";
document.body.style.overflow="auto";

}

}

if(closePayment){

closePayment.onclick=closeSupport;

}

window.addEventListener("click",e=>{

if(e.target===paymentModal){

closeSupport();

}

});

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

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

/* =========================================
   SHODAN CHEATSHEET PREMIUM
========================================= */

const payShodan=document.getElementById("payShodan");
const verifyPayment=document.getElementById("verifyPayment");
const transactionId=document.getElementById("transactionId");
const pdfArea=document.getElementById("pdfArea");

/* Cloudflare Worker URL */
const WORKER_URL="https://YOUR-WORKER.workers.dev/verify";

if(payShodan){

payShodan.onclick=()=>{

const upi=`upi://pay?pa=8668532705@ybl&pn=Govind%20Jadhav&am=5&cu=INR&tn=Shodan%20Cheatsheet`;

window.location.href=upi;

};

}

if(verifyPayment){

verifyPayment.onclick=async()=>{

const txn=transactionId.value.trim();

if(txn===""){

alert("Please enter your UPI Transaction ID.");

return;

}

verifyPayment.innerHTML="Verifying...";
verifyPayment.disabled=true;

try{

const response=await fetch(WORKER_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
transactionId:txn
})

});

const result=await response.json();

if(result.success){

pdfArea.style.display="block";

verifyPayment.innerHTML="Verified ✓";

}else{

alert(result.message||"Payment not verified.");

verifyPayment.innerHTML="Verify Payment";
verifyPayment.disabled=false;

}

}catch(error){

alert("Verification server unavailable.");

verifyPayment.innerHTML="Verify Payment";
verifyPayment.disabled=false;

}

};

}

/* ========= Smooth Section Animation ========= */

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
sec.style.transform="translateY(40px)";
sec.style.transition="all .8s ease";

observer.observe(sec);

});
