document.addEventListener("DOMContentLoaded", function () {
    console.log("External JavaScript is linked!");
  });
  
  
  const myCarouselElement = document.querySelector('#myCarousel');
  
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });

  const emailButton = document.querySelector('#emailButton');

  emailButton.addEventListener('click', function () {
    const email = 'your-email@example.com';
    const subject = 'Hello!';
    const body = 'I would like to get in touch with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });