(function($) {

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	

$('.xs-menu-btn').on('click', function(){
  $('.xs-menu-popup').fadeIn(300);
  
});
$('.xs-menu-close-btn').on('click', function(){
  $('.xs-menu-popup').fadeOut(300);
});
/**
Responsive on 767px
*/
var windowWidth = $(window).width();

var container = $(".container-sm").width();

var width = windowWidth - container;

var containerwidth = width / 2;
var imgwidth = containerwidth + 220;

$(".fs-img-left").css({
  width: imgwidth,
  left: -containerwidth
});

$(".ifs-img-left").css({
  width: imgwidth,
  left: -containerwidth
});



// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }


if( $('.pgs-inner').length ){
    $('.pgs-inner').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.mainsliderarrow .leftarrow'),
      nextArrow: $('.mainsliderarrow .rightarrow'),
    });
}

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


$('[data-fancybox="gallery"]').fancybox({
    loop : true,
     buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ],
});

$("#form").on('submit', function(e){
    e.preventDefault();
    var firstname = $('input[name="firstname"]').val();
    if(firstname.length === 0){
      $('input[name="firstname"]').parent().addClass('haserror');
    }  
    var lastname = $('input[name="lastname"]').val();
    if(lastname.length === 0){
      $('input[name="lastname"]').parent().addClass('haserror');
    }
    var email = $('input[name="email"]').val();
    if(email.length === 0){
      $('input[name="email"]').parent().addClass('haserror');
    }
    var telephone = $('input[name="telephone"]').val();
    if(telephone.length === 0){
      $('input[name="telephone"]').parent().addClass('haserror');
    }
  });
  

  if( $('.opbs-slider').length ){
    $('.opbs-slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.opbssliderarrow .leftarrow'),
      nextArrow: $('.opbssliderarrow .rightarrow'),
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







