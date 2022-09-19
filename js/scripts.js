$(document).ready(function () {
    
    $('.share-btn').on('click', function () {
        $(this).toggleClass('show-social');
    });
    
    $('.burger-menu').on('click', function () {
        $('.main-menu').addClass('show-main-menu');
    });
    
    $('.close-menu').on('click', function () {
        $('.main-menu').removeClass('show-main-menu');
    });
    // $('.pass-field input').on('input', function () {
    //     if ($('.pass-field input').val().length === 0) {
    //         $('.pass-field input').parents('.pass-field').removeClass('filled-input');
    //     } else {
    //         $('.pass-field input').parents('.pass-field').addClass('filled-input');
    //     }
    // });

    // $('.forgot-pass').on('click', function() {
    //     $('.sign-container').addClass('hide-sign');
    //     $('.reset-pass-container').addClass('show-resetpass');
    // });

    // $('.back-to-sign').on('click', function() {
    //     $('.sign-container').removeClass('hide-sign');
    //     $('.reset-pass-container').removeClass('show-resetpass');
    // });

    $('.show-pass').on('click', function () {
        $(this).parents('.pass-field').find('input').prop('type', 'text');
        $(this).hide();
        $(this).next('.hide-pass').show();
    });

    // $('.hide-pass').on('click', function () {
    //     $(this).parents('.pass-field').find('input').prop('type', 'password');
    //     $(this).hide();
    //     $(this).prev('.show-pass').show();
    // });

    // $('.select2').select2({
    //     minimumResultsForSearch: -1
    // });
});