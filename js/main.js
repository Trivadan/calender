(function($) {
    "use strict";

    if ($.fn.classyNav) {
        $('#roamingnav').classyNav();
    }
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'relative');
        }
    });

    //Masonary js
    var colWidth = $(".grid-item").width();
    window.onresize = function(){
      var colWidth = $(".grid-item").width();
    }
    console.log(colWidth);

    var $grid = $(".grid").masonry({
      // options
      itemSelector: ".grid-item",
      columnWidth: ".grid-item",
      // percentPosition: true,
      gutter:20,
      fitWidth: true
    });

    $grid.imagesLoaded().progress(function() {
      $grid.masonry("layout");
    });

    $(document).ready(function() {
      $('.calenderslider').owlCarousel({
        stagePadding: 50,
        center: true,
        items:2,
        autoplay:false,
        loop:true,
        margin:20,
        smartSpeed:800,
        autoplayHoverPause:true,
        nav:true,
        dots:true,
        navText: ['<i class="icofont-arrow-left"></i>', 
                  '<i class="icofont-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                stagePadding:0,
            },
            576: {
                items: 1,
                stagePadding:0,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
      })
    });

      $('#bannermain').owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots:true,
        loop: true,
        responsiveRefreshRate: 200,
      })

      $('#insidebanner').owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots:false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<i class="icofont-arrow-left"></i>', 
            '<i class="icofont-arrow-right"></i>'],
      })

    //LightBox / Fancybox
    $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
            media: {}
        }
    });

})(window.jQuery);