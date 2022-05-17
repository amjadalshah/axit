$(document).ready(function() {
    /// Scroll To Top Button
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            $('.scroll-to-top').fadeIn(400);
        } else {
            $('.scroll-to-top').fadeOut(400);

        }
    })
});