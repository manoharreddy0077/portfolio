document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init();

  // Add event listener for menu toggle button
  document.getElementById('menu-toggle').addEventListener('click', function() {
    alert("clicked");
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
});


// if not added this then both mobile nd desktop nevabr will be vsisble