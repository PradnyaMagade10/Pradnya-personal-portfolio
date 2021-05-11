$(document).ready(function(){


    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });

  
    //loding on start code
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });

    //carousel srction code

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
              },
          600:{
              items:2
              },
          1000:{
              items:2
              }
                 }
              })

});


        
//filter gallary code
   $(document).ready(function(){
       $(".button").click(function(){
           var value =$(this).attr("data-filter");
           if(value=="all"){
               $(".filter").show("100");
           }
           else{
               $(".filter").not("."+value).hide("1000");
               $(".filter").filter("."+value).show("1000");
           }
           $("ul .button").click(function(){
             $(this).addClass('active').siblings().removeClass('active');
           });
       });
   });

//scroll top code
var topntn= document.getElementById('goTop');
window.onscroll=function(){scrollfuncation()};

function scrollfuncation(){
  if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
  {
    topbtn.style.display="block";
  }
  else
  {
    topbtn.style.display="none";
  }
}

function displaytop()
{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}


// portfolio side box

/// 1 ///

function openFuncation1(){
  document.getElementById("box-data1").style.width="60%";
  document.getElementBy("portfolio-box1").style.marginRight="60%";

}

function closeFuncation1(){
  document.getElementById("box-data1").style.width="0%";
  document.getElementById("portfolio-box1").style.marginRight="0%";
}

/// 2 ///
function openFuncation2(){
  document.getElementById("box-data2").style.width="60%";
  document.getElementBy("portfolio-box2").style.marginRight="60%";

}

function closeFuncation2(){
  document.getElementById("box-data2").style.width="0%";
  document.getElementById("portfolio-box2").style.marginRight="0%";
}

/// 3 ///
function openFuncation3(){
  document.getElementById("box-data3").style.width="60%";
  document.getElementBy("portfolio-box3").style.marginRight="60%";

}

function closeFuncation3(){
  document.getElementById("box-data3").style.width="0%";
  document.getElementById("portfolio-box3").style.marginRight="0%";
}

/// 4 ///
function openFuncation4(){
  document.getElementById("box-data4").style.width="60%";
  document.getElementBy("portfolio-box4").style.marginRight="60%";

}

function closeFuncation4(){
  document.getElementById("box-data4").style.width="0%";
  document.getElementById("portfolio-box4").style.marginRight="0%";
}

/// 5 ///
function openFuncation5(){
  document.getElementById("box-data5").style.width="60%";
  document.getElementBy("portfolio-box5").style.marginRight="60%";

}

function closeFuncation5(){
  document.getElementById("box-data5").style.width="0%";
  document.getElementById("portfolio-box5").style.marginRight="0%";
}

/// 6 ///
function openFuncation6(){
  document.getElementById("box-data6").style.width="60%";
  document.getElementBy("portfolio-box6").style.marginRight="60%";
}

function closeFuncation6(){
  document.getElementById("box-data6").style.width="0%";
  document.getElementById("portfolio-box6").style.marginRight="0%";
}







        
    

        

