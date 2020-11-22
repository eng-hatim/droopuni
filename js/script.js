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

    $('#other-click').click(function(e){
        $('#slide-content').slideToggle('fast');

        for(i = 0; i < 1; i++) {
            $('#slide-content').animate({marginTop: '-='+'10px'},100).animate({marginTop: '+='+'10px'},100);
        }

        $('#slide-content').css('display', 'flex');
        $('#other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
        
    });
    
    

  });





