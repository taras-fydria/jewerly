;
(function ($) {

    const homeSlider = $('.ba-hero__slider');
    homeSlider.slick({
        fade: true,

    });


    const detailSliderTop = $('.ba-description__slider--top');
    const detailSliderBottom = $('.ba-description__slider--bottom');


    detailSliderTop.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.ba-description__slider--bottom'
    });


    detailSliderBottom.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.ba-description__slider--top',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows:false,
        dots: false,
        adaptiveHeight: true

    });
    

})(jQuery);

