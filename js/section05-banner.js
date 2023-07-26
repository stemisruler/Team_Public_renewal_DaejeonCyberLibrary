var swiper = new Swiper(".banner-swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  speed: 1500,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // 윈도우 너비 >= 300px 일때 3개 보인다
    300: {
      slidesPerView: 3,
    },
    /*  300 px의 slides per view : 3을 넣은 이유는 300 {~}를 넣지 않으면 800px보다 화면 크기가 작아졌을 때, 800px 미만에서는 반응형 슬라이드 조건이 없어서 슬라이드가 100%로 전부 채워져 엄청 작은 슬라이드들이 모두 한 화면에 들어가게 된다.
        그래서 300px 이상에서도 반응형으로 보여줄 슬라이드 개수를 정했다.*/

    // 윈도우 너비 >= 800px 일때 3개 보인다
    800: {
      slidesPerView: 3,
    },
    // 윈도우 너비 >= 1280px 일때 5개 보인다
    1280: {
      slidesPerView: 5,
    },
  },
});
