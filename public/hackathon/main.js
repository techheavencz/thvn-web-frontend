$(() => {
    function scrollToAnchor(anchorId) {
        const scrollTo = $("#" + anchorId).offset().top - 75;
        $('html, body').animate({scrollTop: scrollTo}, 'slow');
    }

    const navnavEl = $('.navnav');

    // Toogle navigation for mobile layout
    $('.show-nav').click(() => {
        navnavEl.toggleClass('show-mobile');
    });

    // Trigger to handle clicks on fake links
    $('nav [data-slide-target]').on('click', event => {
        const anchorId = $(event.target).data('slide-target');
        scrollToAnchor(anchorId);
        navnavEl.removeClass('show-mobile');
    });

    // Challenges folding
    const challengeEl = $('.challenge');
    challengeEl.on("click", '.challenge-title', event => {
        const parent = $(event.target).closest('.challenge');
        if (parent.hasClass('opened')) {
            parent.removeClass('opened');
        } else {

            challengeEl.removeClass('opened');
            parent.addClass('opened');
        }
    });

    // Start Challenges folding
    $('.challenges').addClass('folding');
});