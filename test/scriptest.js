const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next'
    }
  });
  
  const pacotesSwiper = new Swiper('.pacotes-swiper', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.pacotes-button-next'
    }
  });