
//<!-- Script to Activate the Carousel -->
  $('.carousel').carousel({
      interval: 5000 //changes the speed
  })
//up tombol
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
      $('#tombolScrollTop').fadeIn();
    } else {
      $('#tombolScrollTop').fadeOut();
    }
  });
});

function scrolltotop()
{
  $('html, body').animate({scrollTop : 0},500);
}
