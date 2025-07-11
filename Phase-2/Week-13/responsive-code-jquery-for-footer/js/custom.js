// When a footer heading (h3) is clicked
$(".footer-links-wrapper h3").on("click",function () {
  if ($(window).width()<768){
  $(this).toggleClass("expanded");
  $(this).next("ul").slideToggle(1000)}
})

$(window).resize(function(){
  if ($(window).width()>768){
    $(".footer-links-wrapper ul").show()
    $(".footer-links-wrapper h3").removeClass("expanded")
  }
  else{
    $(".footer-links-wrapper ul").hide();
  }
})



/*
let icon = $(".footer-links-wrapper h3");
// console.log(icon);
// icon.on("click", toggler)
// function toggler(){
// $(this).toggleClass("abel")
// $(this).next().slideToggle();
// }
$(".footer-links-wrapper h3").click(function () {
if ($(window).innerWidth() <= 768) {
$(this).toggleClass("expanded");
$(this).next("ul").slideToggle(1000);
}
});
$(window).on("resize", reload)
function reload(){
if ($(window).innerWidth() > 768) {
location.reload()
}
} 
// if ($(window).innerWidth() < 768) {
// $(".footer-links-wrapper h3").on("click", function () {
// $(this).toggleClass("hide").next().slideToggle();
// });
// }
*/



















/*
$(document).ready(function () {
  function isMobile() {
    return $(window).width() < 768;
  }

  // Add + sign to each h3 if not already present
  $(".footer-links-wrapper h3").each(function () {
    if ($(this).find('.toggle-icon').length === 0) {
      $(this).append('<span class="toggle-icon" style="float:right;cursor:pointer;">+</span>');
    }
  });

  function hideFooterLinksOnMobile() {
    if (isMobile()) {
      $(".footer-links-wrapper ul").hide();
      $(".footer-links-wrapper h3 .toggle-icon").text('+');
      $(".footer-links-wrapper h3").removeClass("expanded");
    } else {
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3 .toggle-icon").text('');
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  }

  hideFooterLinksOnMobile();

  // Toggle sub-links and icon on click (only on mobile)
  $(".footer-links-wrapper h3").on("click", function () {
    if (!isMobile()) return;
    var $icon = $(this).find('.toggle-icon');
    var $ul = $(this).next("ul");
    if ($ul.is(":visible")) {
      $ul.slideUp();
      $icon.text('+');
      $(this).removeClass("expanded");
    } else {
      $ul.slideDown();
      $icon.text('×');
      $(this).addClass("expanded");
    }
  });

  $(window).resize(hideFooterLinksOnMobile);
});
*/