// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add a subtle animation
      themeToggle.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        themeToggle.style.transform = '';
      }, 300);
    });
  }

  // Mobile Navigation
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('mainNav')?.querySelector('.nav__list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navToggle.contains(event.target) || navList.contains(event.target);
      if (!isClickInsideNav && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }

  // FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');
    
    if (header) {
      header.addEventListener('click', function() {
        const isActive = item.classList.contains('accordion__item--active');
        
        // Close all items
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('accordion__item--active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('accordion__item--active');
        }
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
          }
        }
      }
    });
  });

  // Contact Modal
  const contactLink = document.getElementById('contactLink');
  const contactModal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');
  const modalOverlay = contactModal?.querySelector('.modal__overlay');
  const contactForm = document.getElementById('contactForm');

  // Open modal
  if (contactLink && contactModal) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close mobile menu if open
      if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }

  // Close modal function
  function closeContactModal() {
    if (contactModal) {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close modal on close button click
  if (closeModal) {
    closeModal.addEventListener('click', closeContactModal);
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeContactModal);
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && contactModal && contactModal.classList.contains('active')) {
      closeContactModal();
    }
  });

  // Form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message (you can customize this)
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form and close modal
      contactForm.reset();
      closeContactModal();
    });
  }
});
