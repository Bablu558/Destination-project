var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',

    // uppar 3 ko hide kar ke aur
    //  jo already cmnt hai use uncmnt kar ke check kare 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    }
  });