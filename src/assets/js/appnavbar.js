export function initNavbar() {
  // Add scroll event listener
  const handleScroll = () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Initialize mobile nav toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('#navbar');
  
  mobileNavToggle.addEventListener('click', () => {
    navbar.classList.toggle('navbar-mobile');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  });

  // Handle dropdowns in mobile view
  document.querySelectorAll('.navbar .dropdown > a').forEach(item => {
    item.addEventListener('click', e => {
      if (navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        item.nextElementSibling.classList.toggle('dropdown-active');
      }
    });
  });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
} 