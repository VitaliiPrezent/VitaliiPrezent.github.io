$(function(){

    $('.top_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint:1200,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.reviews_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:846,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:585,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })
    $('.menu_button').on('click', function(){
        $('.menu_list').toggleClass('menu_list--active');
    })

});