document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js without jQuery
  new Typed("#type-it", {
    strings: ["Designer", "Developer", "Freelancer", "Creator"],
    typeSpeed: 120,
    loop: true,
  });
});

document.getElementById("checkbox").addEventListener("change", function () {
  document.body.classList.toggle("dark-theme", this.checked);
});

// Glide
document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel", // Options: 'carousel', 'slider'
    startAt: 0, // Start at the first slide
    perView: 1, // Number of slides visible at a time
    gap: 10, // Space between slides
    autoplay: 3000, // Autoplay speed in milliseconds
    hoverpause: true, // Pause on hover
    animationDuration: 800, // Transition duration
    breakpoints: {
      768: { perView: 1 },
      1024: { perView: 3 },
    },
  }).mount();
});
