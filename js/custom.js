$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})


 $(document).ready(function(){
    $("#barguricon").click(function(){
        if( $('#menus').css({top: "-200%"})){
            $('#menus').css({
                top: "100%"
            })
           $("#barguricon").css({
               display: "none"
           });
           $("#bargurhide").css({
            display: "block"
        });
        }
    });

    $("#bargurhide").click(function(){
        if( $('#menus').css({top: "100%"})){
            $('#menus').css({
                top: "-200%"
            })
            $("#barguricon").css({
                display: "block"
            });
            $("#bargurhide").css({
             display: "none"
         });
        }
    });


    // $(window).scroll(function () {
    //     if ($(document).scrollTop() >= 100) {
    //         $('.navbar-menu-wrapper').addClass('navbar-fixed');
    //     } else {
    //         $('.navbar-menu-wrapper').removeClass('navbar-fixed');
    //     }
    // });
 });




  window.onload = function(){

    let category = document.getElementById("category");
    let break_right = document.getElementById("break-right");
    let break_left = document.getElementById("break-left");
    let para = document.getElementById("para");
   
    let viewHeight = Math.max(
       document.documentElement.clientHeight,
       window.innerHeight || 0
     );
   
     if(viewHeight == 1200){
       category.style.marginTop = "280px";
     }
     if(viewHeight == 600){
       break_left.style.paddingTop = "20px";
       break_right.style.paddingTop = "15px";
       category.style.marginTop = "100px";
       para.style.marginBottom = "15px";
     }
  }


//   Tabs Button 
// $(document).ready(function(){
//     $('.tabs-left').click(function(){
//         $(".active").css({
//             'border-radius': "5px"
//         });
//     });
// });
//   Tabs Button 
