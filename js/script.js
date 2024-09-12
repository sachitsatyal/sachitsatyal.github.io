!(($) => {
 "use strict";

 // Smooth scrolling for anchor links with .js-scroll-trigger class
 $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
   location.hostname == this.hostname) {
   let target = $(this.hash);
   target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
   if (target.length) {
    $("html, body").animate(
     { scrollTop: target.offset().top },
     1000, // duration: 1 second
     "easeInOutExpo" // smooth easing animation
    );
    return false; // prevent default link behavior
   }
  }
 });

 // Auto-collapse the navbar when a link is clicked
 $(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
 });

 // Activate Scrollspy to highlight active links in the sidebar
 $("body").scrollspy({ target: "#sideNav", });
})(jQuery);


// Function to handle highlighting the active section link
function highlightNavLink() {
 // Get all sections and nav links
 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('.navbar-nav li a');

 // Scroll position from the top
 let scrollPosition = window.scrollY || document.documentElement.scrollTop;

 // Loop through sections to find which one is currently in view
 sections.forEach(section => {
  const sectionTop = section.offsetTop - 50; // Adjust for fixed header
  const sectionHeight = section.offsetHeight;
  const sectionId = section.getAttribute('id');

  if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
   // Remove the active class from all links
   navLinks.forEach(link => link.classList.remove('active'));

   // Add the active class to the current section's link
   const activeLink = document.querySelector(`.navbar-nav li a[href="#${sectionId}"]`);
   if (activeLink) {
    activeLink.classList.add('active');
   }
  }
 });
}

// Attach the highlight function to the scroll event
window.addEventListener('scroll', highlightNavLink);

// Initially highlight the first section
document.addEventListener('DOMContentLoaded', highlightNavLink);

