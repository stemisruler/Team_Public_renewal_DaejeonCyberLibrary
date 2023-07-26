/* page 로드되었을때 point img + background img가 슬라이드되며 보이는 애니메이션 */
$(document).ready(function(){
  $(".notice-text-box .point-color-image").stop().animate({
    left : "-20px"
  },700)
  $(".notice-background").stop().animate({
    bottom : "-40%",
    left : "-10%"
  },2000)
  $(".notice-text-box ul li").hover(function(){
  })


  /* swipe */
  var swiper = new Swiper(".notice-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})