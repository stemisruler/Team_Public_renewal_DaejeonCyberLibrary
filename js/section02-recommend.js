function slider(){

      let $this = $('.slider');
      let swiper = undefined;
      //900px 이상일때 undefined , 900px 미만일때 object
      let slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
      let slideInx = 0; //현재 슬라이드 index
      
      //디바이스 체크
      let oldWChk = window.innerWidth > 900 ? 'pc' : 'mo'; //inner 900px 이하일때 모바일
      sliderAct();//swiper act용 함수
      window.addEventListener('resize', function (){
        let newWChk = this.window.innerWidth > 900 ? 'pc' : 'mo';
        if(newWChk != oldWChk){
            oldWChk = newWChk;
            sliderAct();
        }
      });

      function sliderAct(){ //swiper act용 함수
          if (swiper != undefined){ 
              swiper.destroy();
              swiper = undefined;
          } //호출된 스와이퍼 제거
        /* 
        이미 호출된 swiper에 destroy 메서드를 사용하면 swiper가 제거됨.
        하지만 이미 호출된 swiper는 제거하더라도 타입이 object.
        따라서 swiper를 제거함과 동시에 타입도 undefined로 수정.
        */
        //slidesPerView 옵션 설정
        let viewNum = oldWChk == 'pc' ? 4 : 2; //pc버전일땐 4개 슬라이드 , mo버전일때 2개 슬라이드 보임
        //loop 옵션 체크
        let loopChk = slideNum > viewNum;

        swiper = new Swiper(`.slider .board-inner`, {
            slidesPerView: viewNum,
            initialSlide :slideInx,
            spaceBetween: 15,
            slidesPerGroup: 1,
            loop: loopChk,
            navigation: {
                prevEl: (`.board .btn_prev`),
                nextEl: (`.board .btn_next`),
              },
            on: {
                activeIndexChange: function () {
                     slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
              },
            pagination:{
                el: (`.board .paginationCount`),
                type: "fraction",
              },
          });
      }
  
}

slider();  