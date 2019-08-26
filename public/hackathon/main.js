function scrollToAnchor(aid){
  var aTag = $("#"+ aid);
    $('html,body').animate({scrollTop: aTag.offset().top-75},'slow');
}

$(document).ready(function() {
  $('.show-nav').click(function () {
    $('.navnav').toggleClass('show-mobile');
  });

  $('[data-slide-target]').click(function() {
    var id = $(this).data('slide-target');
    scrollToAnchor(id);
    $('.navnav').removeClass('show-mobile');
  });

  // Challenges folding
  $('.challenge .challenge-title').click(function () {
    var parent = $(this).closest('.challenge');
    if (parent.hasClass('opened')) {
      parent.removeClass('opened');
    } else {
      $('.challenge').removeClass('opened');
      parent.addClass('opened');
    }
  });

  // Start Challenges folding
  $('.challenges').addClass('folding');
});