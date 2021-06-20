
  window.addEventListener("load", onLoaded);

//title text
$(document).ready(function() {
    $(".title").lettering();
   
  });

  function onLoaded() {   
    var title1 = new TimelineMax();
    title1.to("", 0, {visibility: 'hidden', opacity: 0});
    title1.staggerFromTo(".title span", 0.7, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  }



  $(".btn-enter").on("click", function()
  { 
    $(this).parent().fadeOut(1500, function(){
 });
});


  $(".btn-bthome").on("click", function(){
    $(".landing-page").fadeIn(500, function(){});
  });