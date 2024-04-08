$(function () {
  const ticket = new Swiper(".ticket", {
    nextButton: ".ticket-button .swiper-button-next",
    prevButton: ".ticket-button .swiper-button-prev",
    spaceBetween: 0,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    breakpoints: {        
      1100: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

  const brand = new Swiper(".brand", {
    nextButton: ".brand-button .swiper-button-next",
    prevButton: ".brand-button .swiper-button-prev",
    autoHeight: true,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },

      1101: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });


  
});
