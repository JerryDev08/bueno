$(document).ready(function () {
  $("#carrousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button">PREV</button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button">NEXT</button>',
  });
});
