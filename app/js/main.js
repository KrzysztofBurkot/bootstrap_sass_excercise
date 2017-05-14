'use strict';

/*SMOOTH SCROLL*/
$(document).ready(function () {
    $('.menu_list_items').on('click', function (e) {
        e.preventDefault();     
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

/*MENU FONT AND BACKGROUND CHANGES WITH SCROLL*/
$(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
        $('#menu').css('background-color', 'rgba(255,255,255,1)');
        $('#menu_logo').css('color', '#777');
        $('.menu_list_items').css('color', '#777');
    } else {
        console.log('pozycja mniej niż 200');
        $('#menu').css('background-color', 'rgba(255,255,255,0)');
        $('#menu_logo').css('color', '#fff');
        $('.menu_list_items').css('color', '#fff');
    };
});