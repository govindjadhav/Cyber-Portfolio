/* =========================
   Typing Animation
   Sirf niche roles add kare
========================= */

const roles = [
  "Cybersecurity Engineer",
  "Application Security",
  "DevSecOps Engineer",
  "Penetration Tester",

  // Yaha naye roles add kare
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

function typingEffect() {
  typingElement.textContent = roles[roleIndex].substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > roles[roleIndex].length) {
      deleting = true;
      setTimeout(typingEffect, 1000);
      return;
    }
  } else {
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typingEffect, deleting ? 50 : 90);
}

typingEffect();

/* =========================
   Cyber Background Animation
========================= */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particle Count
const PARTICLE_COUNT = 90;

const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5
}));

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#5eead4";

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.fillRect(p.x, p.y, 2, 2);
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.hypot(dx, dy);

      if (distance < 120) {
        ctx.strokeStyle = `rgba(94,234,212,${(1 - distance / 120) * 0.25})`;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animateBackground);
}

animateBackground();
