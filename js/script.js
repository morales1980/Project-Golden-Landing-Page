(function () {
  var mobileNav = document.querySelector('.mobile-nav');
  var navMenu = document.querySelector('header nav ul');
  var jumboHeader1 = document.querySelector('#home h1');
  var jumboHeader2 = document.querySelector('#home h2');
  function toggleClass() {
    showNavMenu();
    mobileNav.classList.toggle('open');
  }
  function showNavMenu() {
    if(navMenu.style.visibility === 'visible') {
      navMenu.style.visibility = 'hidden';
      navMenu.style.opacity = '0';
      jumboHeader1.style.visibility = 'visible';
      jumboHeader1.style.opacity = '1';
      jumboHeader2.style.visibility = 'visible';
      jumboHeader2.style.opacity = '1';
    } else {
      navMenu.style.visibility = 'visible';
      navMenu.style.opacity = '1';
      jumboHeader1.style.visibility = 'hidden';
      jumboHeader1.style.opacity = '0';
      jumboHeader2.style.visibility = 'hidden';
      jumboHeader2.style.opacity = '0';
    }
  }

  mobileNav.addEventListener('click', toggleClass);
})();
