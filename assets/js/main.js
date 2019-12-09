(function($) {

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	

/**
Responsive on 767px
*/
var windowWidth = $(window).width();
// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }

if( $('.slider').length ){
    $('.slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: $('.mailsliderarrow .leftarrow'),
      nextArrow: $('.mailsliderarrow .rightarrow'),
    });
}
if( $('.PropertiesSlider').length ){
    $('.PropertiesSlider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.propertiesliderarrow .previous'),
      nextArrow: $('.propertiesliderarrow .next'),
    });
}

if ($('.cookie-btn').length) {
  $('.cookie-btn').on('click', function(e){
    e.preventDefault();
    $('.cookie-message-section').hide('slow');
  });
}









// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


//$("[data-fancybox]").fancybox({});


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

    new WOW().init();

})(jQuery);


function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}







