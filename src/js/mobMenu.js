// document.addEventListener("DOMContentLoaded", () => {
//   const burger = document.querySelector('[data-action="toggle-burger"]');
//   const mobileBackdrop = document.querySelector('[data-mobile-backdrop]');
//   const menuLinks = document.querySelectorAll('[data-action="close-menu"]');
//   const closeBtn = document.querySelector('[data-action="close-menu"]');
//   const body = document.body;

//   const toggleMenu = () => {
//     const isOpen = mobileBackdrop.getAttribute('data-state') === 'open';
//     const currentState = isOpen ? 'closed' : 'open';

//     mobileBackdrop.setAttribute('data-state', currentState);

//     if (currentState === 'open') {
//       body.setAttribute('data-menu', 'open');
//     } else {
//       body.removeAttribute('data-menu');
//     }
//   };

//   burger.addEventListener('click', toggleMenu);

//   menuLinks.forEach(link => {
//     link.addEventListener('click', toggleMenu);
//   });

//   if (closeBtn) {
//     closeBtn.addEventListener('click', toggleMenu);
//   }
// });


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