// 头部显隐
$(document).ready(function () {
  var p = 0;
  $(window).scroll(function (e) {
    p = $(this).scrollTop();
    let carColorPcTop = $("#car-color-pc").offset().top - 500;
    let carColorMbTop = $("#car-color-mb").offset().top - 500;
    if (carColorPcTop == -500) {
      if (p > carColorMbTop) {
        $("header").css("display", "none");
      } else {
        $("header").css("display", "flex");
      }
    } else {
      if (p > carColorPcTop) {
        $("header").css("display", "none");
      } else {
        $("header").css("display", "flex");
      }
    }
  });
});
