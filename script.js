// script.js

document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    let current = 0;

    // Initial setup
    pages.forEach((p, i) => {
        if (i !== 0) {
            p.style.opacity = 0;
            p.style.display = "none";
        }
        p.style.transition = "opacity 0.6s ease";
    });

    // Page transition
    function nextPage() {
        if (current < pages.length - 1) {
            const oldPage = pages[current];
            const newPage = pages[current + 1];

            oldPage.style.opacity = 0;
            setTimeout(() => oldPage.style.display = "none", 600);

            newPage.style.display = "block";
            setTimeout(() => newPage.style.opacity = 1, 50);

            current++;
        }
    }

    // Button click
    pages.forEach(page => {
        const btn = page.querySelector("button");
        if (btn) {
            btn.addEventListener("click", nextPage);
        }
    });

    // Arrow key
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextPage();
    });

    // 🎈 CREATE BALLOONS HERE
    createBalloons();
});


// 🎉 Confetti
function confetti() {
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.background = ['#ffb3d9','#ffe1f0','#d3f0f9'][Math.floor(Math.random()*3)];
    dot.style.left = Math.random()*100+'vw';
    dot.style.top = '0';
    dot.style.opacity = 0.8;
    dot.style.borderRadius = '50%';
    dot.style.transform = `rotate(${Math.random()*360}deg)`;
    dot.style.transition = 'top 3s linear, transform 3s linear';
    document.body.appendChild(dot);

    setTimeout(() => { 
      dot.style.top = '100vh'; 
      dot.style.transform = `rotate(${Math.random()*720}deg)`; 
    }, 50);

    setTimeout(() => dot.remove(), 3100);
  }
}


// 🎉 Trigger confetti on last button
document.querySelectorAll('.page button').forEach((btn, idx, btns) => {
  btn.addEventListener('click', () => {
    if(idx === btns.length-1) confetti();
  });
});


// 🎈 BALLOON GENERATOR
function createBalloons() {
    const container = document.getElementById("balloon-container");

    for (let i = 0; i < 15; i++) {
        const b = document.createElement("div");
        b.classList.add("decor", "balloon");

        // random position
        b.style.left = Math.random() * 100 + "vw";

        // random size
        const size = Math.random() * 10 + 20;
        b.style.width = size + "px";
        b.style.height = size * 1.2 + "px";

        // soft aesthetic colors
        const colors = [
            "radial-gradient(circle at 30% 30%, #ffffff, #ffd6e8)",
            "radial-gradient(circle at 30% 30%, #ffffff, #ffe4f2)",
            "radial-gradient(circle at 30% 30%, #ffffff, #fce1ec)"
        ];
        b.style.background = colors[Math.floor(Math.random() * colors.length)];

        // animation randomness
        b.style.animationDuration = (6 + Math.random() * 6) + "s";
        b.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(b);
    }
}