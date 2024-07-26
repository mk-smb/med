$(".testimonial-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    margin: 10,
    loop: true,
    // responsiveClass:true,
    // responsive:{
    //     0:{
    //         items:1,
    //         nav:true
    //     },
    //     600:{
    //         items:3,
    //         nav:false
    //     },
    //     1000:{
    //         items:5,
    //         nav:true,
    //         loop:false
    //     }
    // }
})

$(".partner-carousel").owlCarousel({
    // items: 4,
    loop: true,
    nav: false,
    // dots: true,
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        1024:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

     // Custom navigation buttons
     $('.hero-prev').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
      });
      $('.hero-next').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
      });

// navigation

$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $('#navbar-menu').toggleClass('hidden block');
    });
});