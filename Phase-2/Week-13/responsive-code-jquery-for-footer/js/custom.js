// When a footer heading (h3) is clicked
$(".footer-links-wrapper h3").on("click",function () {
  if ($(window).width()<768){
  $(this).toggleClass("expanded");
  $(this).next("ul").slideToggle()}
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

  // Hide all sub-links on mobile by default
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
  $(".footer-links-wrapper h3").on("click", function (e) {
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

  // On window resize, update footer links visibility and icons
  $(window).resize(function () {
    hideFooterLinksOnMobile();
  });
});


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>choose your skill</h1>
//     <select onchange="handleChanges">
//       <option value="medical">medical</option>
//       <option value="farming">farming</option>
//     </select>
//     <div id="expWrapper"></div>
//     <script>
//       let handleChanges = (event) => {
//         let value = event.target.value;
//         console.log(event);
//         // conditionalyy render to expWrapper
//         let expWrapper = document.getElementById("expWrapper");
//         let farming = `<div>
// <input id='exper' />
// </div>`;
//         let medical = `<div>
// <input id='exper' />
// </div>`;
//         if (value == "medical") expWrapper.innerHTML = medical;
//         else expWrapper.innerHTML = farming;
//       };
//     </script>
//   </body>
// </html>