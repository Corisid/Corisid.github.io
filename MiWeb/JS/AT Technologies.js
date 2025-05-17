    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.querySelector('.toggle-menu');
      const menu = document.querySelector('.menu');

      toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    });
    