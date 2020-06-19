$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.dropItem').click(function () {
    $(this).find('.dropDown-menu').fadeToggle();
});

$('.playpause').click(function () {
    $('.video-wrapper').toggleClass('video-click');

    if($(".fullscreen-video").get(0).paused){
        $(".fullscreen-video").get(0).play();
        $(this).fadeOut();

    }else{
        $(".fullscreen-video").get(0).pause();

        $(this).fadeIn();
    }

});

$('.works-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.works-slider__nav',
    appendDots: '.works-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

var target = $('.benefits__inner');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        $({ blurRadius: 5 }).animate(
            { blurRadius: 0 },
            {
                duration: 3500,
                easing: "swing",
            }
        );
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            " "
        );
        $(".benefits__number").each(function () {
            var tcount = $(this).data("count");
            $(this).animateNumber(
                {
                    number: tcount,
                    easing: "easeInQuad",
                    numberStep: comma_separator_number_step
                },
                1000
            );
        });
    }
});