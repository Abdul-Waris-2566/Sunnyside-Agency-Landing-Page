const navBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

// Function for toggling mobile menu
const toggleMobileNav = function () {
  mobileNav.classList.toggle("display");
};

// Add Event listeners to navigation links and mobile nav icon for toggling mobile Menu.
navBtn.addEventListener("click", toggleMobileNav);
navLinks.forEach((link) => link.addEventListener("click", toggleMobileNav));
