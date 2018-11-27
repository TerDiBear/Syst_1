$(document).ready(function () {

    $('#nav__item li').onclick(
        function () {
            $('ul:first', this).slideDown(150);
        },
        function () {
            $('ul:first', this).slideUp(150);
        }
    );

});
