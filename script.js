console.log("Next Gen AI Website Loaded 🚀");

// Smooth button click effect
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thanks for showing interest! 🚀 We will contact you soon.");
  });
});

// Smooth scroll effect (future ready)
document.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.7)";
  } else {
    nav.style.background = "rgba(255,255,255,0.05)";
  }
});
