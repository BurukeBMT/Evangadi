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