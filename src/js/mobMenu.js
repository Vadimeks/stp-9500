document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('[data-action="toggle-burger"]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const closeBtn = document.querySelector('.mobile-menu-close-btn');
  const menuLinks = document.querySelectorAll('[data-action="close-menu"]');

  const openMenu = () => {
    mobileMenu.setAttribute('data-state', 'open');
    document.body.setAttribute('data-menu', 'open');
  };

  const closeMenu = () => {
    mobileMenu.setAttribute('data-state', 'closed');
    document.body.removeAttribute('data-menu');
  };

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.getAttribute('data-state') === 'open') {
      if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
      }
    }
  });
});