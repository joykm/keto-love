$(function () {
    $(document).scroll(function(){
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 2);
    });
});

// Toggle Like Button
function toggleLikeIcon(liked) {
  liked.classList.toggle("las");
}