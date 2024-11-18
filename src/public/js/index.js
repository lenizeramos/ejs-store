$(function () {
    console.log("I'm Ivan");
    var nextBtn = $('.next-button');
    var prevBtn = $('.prev-button');
    nextBtn.on('click', function (e) {
        var target = $(e.currentTarget);
        var parentElement = target.closest('.carousel');
        var slides = parentElement.find('.slide-container');
        var activeSlide = slides.find('[data-active]');
        var nextSlide = activeSlide.next('.slide');
        if (nextSlide.length) {
            activeSlide.removeAttr('data-active');
            nextSlide.attr('data-active', '');
        }
        else {
            activeSlide.removeAttr('data-active');
            slides.find('.slide').first().attr('data-active', '');
        }
    });
    prevBtn.on('click', function (e) {
        var target = $(e.currentTarget);
        var parentElement = target.closest('.carousel');
        var slides = parentElement.find('.slide-container');
        var activeSlide = slides.find('[data-active]');
        var prevSlide = activeSlide.prev('.slide');
        if (prevSlide.length) {
            activeSlide.removeAttr('data-active');
            prevSlide.attr('data-active', '');
        }
        else {
            activeSlide.removeAttr('data-active');
            slides.find('.slide').last().attr('data-active', '');
        }
    });
});
