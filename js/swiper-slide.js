$(function () {
  const event = new Swiper(".event", {
    pagination: ".event .swiper-pagination",
    nextButton: ".event-button .swiper-button-next",
    prevButton: ".event-button .swiper-button-prev",
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
        pagination: false,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  const domestic = new Swiper(".domestic", {
    nextButton: ".domestic-button .swiper-button-next",
    prevButton: ".domestic-button .swiper-button-prev",
    autoHeight: true,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 6.3,
        spaceBetween: 10,
      },

      1101: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
    },
  });

  const overseas = new Swiper(".overseas", {
    nextButton: ".overseas-button .swiper-button-next",
    prevButton: ".overseas-button .swiper-button-prev",
    autoHeight: true,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 6.3,
        spaceBetween: 10,
      },

      1101: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
    },
  });

  const hotel = new Swiper(".hotel", {
    nextButton: ".hotel-button .swiper-button-next",
    prevButton: ".hotel-button .swiper-button-prev",
    autoHeight: true,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 6.3,
        spaceBetween: 10,
      },

      1101: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
    },
  });

  const sp = new Swiper(".sp", {
    nextButton: ".sp-button .swiper-button-next",
    prevButton: ".sp-button .swiper-button-prev",
    autoHeight: true,
    loop: true,
    breakpoints: {
      2000: {
        slidesPerView: 4.5,
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
