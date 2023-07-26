function slideShow(index) {
  const slider = document.getElementsByClassName("visual-bg")[0],
    imgs = slider.getElementsByTagName("img");
  let numImages = imgs.length;
  let currentIndex = 0;
  /* 이미지 전환 */
  function showImage(index) {
    for (let i = 0; i < numImages; i++) {
      imgs[i].classList.remove("active"); /* 클래스 제거해서 이미지 안보임 */
    }
    imgs[index].classList.add("active"); /* 클래스 넣어서 이미지 보임 */
  }
  /* 다음 이미지 */
  function nextImage() {
    currentIndex = (currentIndex + 1) % numImages;
    showImage(currentIndex);
  }
  // 이미지 슬라이더 4s 간격으로 시작
  setInterval(nextImage, 4000);
}

slideShow();

//currentIndex = (currentIndex + 1) % numImages; 설명
/* 이미지 총개수를 나눠서 다시 할당. 이를 이용하여 현재 이미지의 index가 이미지 개수보다 크면 다시 처음부터 돌아가게*/
/* ex. 이미지가 5개이고 현재 currentIndex가 3일 경우 (3 + 1) % 5는 4가되어 다음 이미지의 index로 설정. 만약 현재 currentIndex가 4일 경우(4+ 1) % 5는 0이 되어 다시 첫 번째 이미지의 index로 설정. */
