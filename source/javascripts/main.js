$(function() {
  $('[data-id="back-to-top"]').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $('[data-id="jump-to"]').on("click", function(e) {
      e.preventDefault();

      $("body, html").animate({
          scrollTop: $( $(this).attr('href') ).offset().top-90
      }, 600);
  });

  (function(){
    var showOrHide = true;

    $('[data-id="drop-down-menu-button"]').click(function() {
      if (showOrHide) {
        $('.main-menu').addClass('visible');
        showOrHide = false;
      } else {
        $('.main-menu').removeClass('visible');
        showOrHide = true;
      }
    });
  })();
});

