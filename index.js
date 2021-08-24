let herse_down = true;

$(window).on("load", function () {
    $(".herse").toggleClass('herse_down');
    $(".herse_down").on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(".herse_down").toggleClass('herse_rise');
        $(".herse_rise").removeClass("herse_down");
    });
});

$('.herse').on('touchstart click', function () {
    if (herse_down) {
        herse_down = false;
        $('.herse').css('transition', '2000ms ease-in-out');
        $('.herse').css('transform', 'translate(-50%, 0%) translateY(0%)');
    } else {
        herse_down = true;
        $('.herse').css('transition', '3000ms ease-in-out');
        $('.herse').css('transform', 'translate(-50%, 0%) translateY(-90%)');
    }
});