(function () {
  var mobileNav = document.querySelector('.mobile-nav');
  var navMenu = document.querySelector('header nav ul');
  function toggleClass() {
    mobileNav.classList.toggle('open');
    showNavMenu();
  }
  function showNavMenu() {
    if(navMenu.style.display === 'none') {
      navMenu.style.display = 'block';
    } else {
      navMenu.style.display = 'none';
    }

  }
  mobileNav.addEventListener('click', toggleClass);
})();
