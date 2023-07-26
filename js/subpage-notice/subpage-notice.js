$(document).ready(function(){
  let current_page;
  $(".pagination").click(function(event){
    /* 현재 페이지를 가져온다 */
    current_page = document.querySelector(".current-page-in-notice");
    // current_page.removeClass("current-page-in-notice"); /* removeClass는 왜안되지? */
    // event.target.parent().addClass("current-page-in-notice");
    current_page.classList.remove("current-page-in-notice");
    event.target.classList.add("current-page-in-notice");
  })

})