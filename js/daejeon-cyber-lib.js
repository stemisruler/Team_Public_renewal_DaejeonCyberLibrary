$(document).ready(function(){
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
