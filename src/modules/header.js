$(document).ready(function () {
    $('.header__burger').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.header').toggleClass('header--active');
    })
})