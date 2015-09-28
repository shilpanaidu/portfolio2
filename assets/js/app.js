$(function () {
    $('.col-md-2.image-slide').click(function () {
        var selectedImage = $(this).find('img').clone();
        var selectedImageDesc = $(this).find('.description.hidden').clone();

        var selectedImageCaption = selectedImageDesc.find('h2');
        var selectedImageContent = selectedImageDesc.find('p');

        $('.image-slider-container').find('img').remove();
        $('.image-slider-container').append(selectedImage);

        $('.image-slider-description-container').find('h2').remove();
        $('.image-slider-description-container').append(selectedImageCaption);

        $('.image-slider-description-container').find('p').remove();
        $('.image-slider-description-container').append(selectedImageContent);
    });

    $('.bxslider').bxSlider();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    new WOW().init();
});