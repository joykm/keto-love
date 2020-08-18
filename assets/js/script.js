// Learned From A Udemy Course on Bootstrap 4, by Colt Steele.
// https://www.udemy.com/course/the-web-developer-bootcamp/
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

// function toggleLikeColor(id) {

//   var color = document.getElementById(id).style.color;
//   if (color == "rgb(0, 0, 0)") {
//       document.getElementById(id).style.color = "rgb(255,0,0)";
//   } else {
//       document.getElementById(id).style.color = "(0,0,255)";
//   }
// }

// function toggleLikeColor(id) {

//   var color = document.getElementById(id).style.color;
//   if (color == "rgb(255, 0, 0)") {
//       document.getElementById(id).style.color = "rgb(0,0,0)";
//   } else {
//       document.getElementById(id).style.color = "rgb(255,0,0)";
//   }

// }

// function toggleLikeColor(id) {

//   var color = document.getElementById(id).style.color;
//   if (color == "rgb(255, 0, 0)") {
//       document.getElementById(id).style.color = "rgb(0,0,0)";
//   } else {
//       document.getElementById(id).style.color = "rgb(255,0,0)";
//   }

// }