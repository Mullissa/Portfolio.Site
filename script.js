document.addEventListener("DOMContentLoaded", function () {
    console.log("External JavaScript is linked!");
  });
  
  
  const myCarouselElement = document.querySelector('#myCarousel');
  
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });