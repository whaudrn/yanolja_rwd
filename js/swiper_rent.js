$(function () {
  const event = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1101: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});
