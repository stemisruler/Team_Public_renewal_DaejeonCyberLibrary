var burger = $('.hamburger');
var burger2 = $('.ham-close');
var h = 0;/* click을 한번한건지 한번더 한건지 확인용 변수 */
$(burger).on("click", function () {
    if (h == 0) {
        $('.responsive-gnb').animate({
            width: "100vw"
        }, 300);
        h++;
    } else if (h == 1) {
        $('.responsive-gnb').animate({
            width: "0"
        }, 300);
        h--;
    }
});
// 창 크기 변경 이벤트 핸들러
function checkWindowSize() {
    if ($(window).innerWidth() >= 1280) {
        $('.responsive-gnb').css({
            width: "0"
        });
        h = 0;
    }
}
/* 스크롤하면 gnb 초기화 */
$(window).scroll(function() {
    sct = $(window).scrollTop();
    if(sct>500){
        $('.responsive-gnb').css({
            width: "0"
        }, 500);
        $(burger).removeClass('active-1');
        h=0;
    }
});
/* 창을 늘리면 초기화 */
$(window).on("resize", function() {
    checkWindowSize();
});
/* x아이콘을 누르면 창이 꺼짐 */
$(burger2).on("click", function () {
    if (h == 1) {
        $('.responsive-gnb').animate({
            width: "0"
        }, 300);
        h--;
    }
});
/* 각 서브메뉴 아코디언 누르면 반응 */
let col = $('.collapsible');
$(document).ready(function() {
    $(col).click(function() {
      var header = $(this);
      var content = header.next('.content-sub');
      var siblings = header.parent().siblings().find('.content-sub');
  
      content.slideToggle();
      content.toggleClass('open');
      siblings.slideUp();
      siblings.removeClass('open');
    });
  });
