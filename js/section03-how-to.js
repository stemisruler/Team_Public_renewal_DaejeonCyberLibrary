$(document).ready(function(){
  $(".how-to-name .point-color-image").stop().animate({
    left : "-20px"
  },700)

/* contents hover시 point-color로 채워지는 animation */
  $(".contents").hover(function(){
   $(".color-circle",this).stop().animate({
    opacity : "1",
    height : "100%"
   });
  },
  function(){
    $(".color-circle",this).stop().animate({
      opacity : "0",
      height : "70%"
     },
     {duration : 0});
   })
})
