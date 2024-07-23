document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      alert("oooo")
      menu.classList.toggle('show');
    });
  }
});


// if not added this then both mobile nd desktop nevabr will be vsisble