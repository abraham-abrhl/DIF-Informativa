document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const mainMenu = document.getElementById('main-menu');
  const closeMenu = document.getElementById('close-menu');

  function showMenu() {
    mainMenu.classList.remove('-translate-x-full');
    mainMenu.classList.add('translate-x-0');
    menuBtn.classList.add('hidden');
    closeMenu.classList.remove('hidden');
  }

  function hideMenu() {
    mainMenu.classList.add('-translate-x-full');
    mainMenu.classList.remove('translate-x-0');
    menuBtn.classList.remove('hidden');
    closeMenu.classList.add('hidden');
  }

  if (menuBtn && mainMenu && closeMenu) {
    if(window.innerWidth < 768) {
      hideMenu();
    } else {
      mainMenu.classList.remove('-translate-x-full');
      mainMenu.classList.add('translate-x-0');
      menuBtn.classList.add('hidden');
      closeMenu.classList.add('hidden');
    }

    menuBtn.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', hideMenu);

    window.addEventListener('resize', () => {
      if(window.innerWidth >= 768) {
        mainMenu.classList.remove('-translate-x-full');
        mainMenu.classList.add('translate-x-0');
        menuBtn.classList.add('hidden');
        closeMenu.classList.add('hidden');
      } else {
        hideMenu();
      }
    });
  }
});