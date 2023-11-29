document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');

  burgerMenu.addEventListener('click', function () {
      overlay.style.width = overlay.style.width === '100%' ? '0' : '100%';
  });

  // Close the overlay when a link is clicked
  const overlayLinks = document.querySelectorAll('.overlay a');
  overlayLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          overlay.style.width = '0';
      });
  });
});
