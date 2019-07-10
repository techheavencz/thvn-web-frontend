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
    console.log(this);
    console.log(id);
    scrollToAnchor(id);
    $('.navnav').removeClass('show-mobile');
  });
});