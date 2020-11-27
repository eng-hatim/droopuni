$(document).ready(function() {

    $('#image-background, #play-icon').on('click', function(ev) {
        $("#video")[0].src += "?autoplay=1";
        $('#image-background, #play-icon').remove();   
    });

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })    

    function recalcCarouselWidth(carousel) {
        var $stage = carousel.find('.owl-stage'),
             stageW = $stage.width(),
         $el = $('.owl-item'),
         elW = 0;
        $el.each(function() {
            elW += $(this)[0].getBoundingClientRect().width;
        });
        if ( elW > stageW ) {
         console.log('elW maggiore di stageW: ' +  elW + ' > ' + stageW);
         $stage.width( Math.ceil( elW ) );
        }
    }
    $(window).on('resize', function(e){
        recalcCarouselWidth( $('.owl-carousel.common-search') );
    }).resize();
    $('.owl-carousel.common-search').on('refreshed.owl.carousel', function(event) {
         recalcCarouselWidth( $('.owl-carousel') );
    });
    $('.owl-carousel.common-search').on('onResize.owl.carousel', function(event) {
        recalcCarouselWidth( $('.owl-carousel') );
    });

    // 
    $('#other-click').click(function(e){
        $('#slide-content').slideToggle('fast');

        for(i = 0; i < 1; i++) {
            $('#slide-content').animate({marginTop: '-='+'10px'},100).animate({marginTop: '+='+'10px'},100);
        }

        $('#slide-content').css('display', 'flex');
        $('#other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
        
    });

    // Animation Search Input
    $('#input-hero-search').click(function() {
        $('#input-hero-search-text').show();
        $('#input-hero-search-text').focus();
    });
        
    $('#input-hero-search-text').on('focusout', function () {
        $('#input-hero-search-text').hide();
      });

      $('#hover-background figure').hover(function () {
        $('.common-search .owl-item .university-item img').css('visibility', 'hidden');
      });



  });