// script.js
document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page"); // all pages wrapped in <div class="page">
    let current = 0;

    // Initial setup: show first page, hide others
    pages.forEach((p, i) => {
        if (i !== 0) {
            p.style.opacity = 0;
            p.style.display = "none";
        }
        p.style.transition = "opacity 0.6s ease";
    });

    // Function to go to next page with fade effect
    function nextPage() {
        if (current < pages.length - 1) {
            const oldPage = pages[current];
            const newPage = pages[current + 1];

            // fade out current page
            oldPage.style.opacity = 0;
            setTimeout(() => oldPage.style.display = "none", 600);

            // fade in next page
            newPage.style.display = "block";
            setTimeout(() => newPage.style.opacity = 1, 50); // slight delay for smooth effect

            current++;
        }
    }

    // Attach click event to all buttons
    pages.forEach(page => {
        const btn = page.querySelector("button");
        if (btn) {
            btn.addEventListener("click", nextPage);
        }
    });

    // Optional: press arrow key for next page
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextPage();
    });
});

// Confetti on last page
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

// trigger confetti on last page
document.querySelectorAll('.page button').forEach((btn, idx, btns) => {
  btn.addEventListener('click', () => {
    if(idx === btns.length-1) confetti();
  });
});