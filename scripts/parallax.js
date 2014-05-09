//  RESPONSIVE BRANCH

$(document).ready(function(){
var windowWidth;
var windowHeight;
var docuHeight;
var docuWidth;
var isSmall;
var scrolledY;
var flag = false;

window.onresize = function() {
  windowWidth = $(document).width();
  docuWidth = $(document).width();

  if(windowWidth < 720) {
    $('.cover').css('height', '100%');

    $('.window-one-wrap').css('height', windowHeight);
    $('.window-two-wrap').css('height', windowHeight);
    $('.window-three-wrap').css('height', windowHeight);
    $('.window-four-wrap').css('height', windowHeight);

    $('.bg1').css('height', '100%');
    $('.bg2').css('height', '100%');
    $('.bg3').css('height', '100%');
    $('.bg4').css('height', '100%');
    console.log($(window).scrollTop());
  } 
}

  window.onload = function() {
    windowHeight = $(window).height();
    docuHeight = $(document).height();
    docuWidth = $(document).width();
    $('.cover').css('height', windowHeight);
    $('.circle-one').css('top', windowHeight+21);
    $('#curve-line-1').css('top', windowHeight+4);
    $('#castle').css('top', windowHeight+3);
    $('#curve-line-2').css('top', windowHeight+322);
    $('.circle-two').css('top', windowHeight+520);
    $('#white-line').css('top', windowHeight+513);
    $('#curve-line-3').css('top', windowHeight+549);
    $('#third-page-line').css('top', windowHeight+936);

    console.log(windowHeight);
  }


 
  function drawLineOne (lineOneOffset) {
    var path = document.querySelector('.line-one');
    var pathLength = path.getTotalLength();  // 1204.9405517578125
    var scrolledY = $(window).scrollTop();
    var zeroOffset = (lineOneOffset)-(scrolledY*7);
    
    
    $('.line-one').css("stroke-dashoffset", zeroOffset);
    if(scrolledY>515) {
      $('.line-one').css("stroke-dashoffset", 0);
    }
  } 

  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 1155.9654541015625
    scrolledY = $(window).scrollTop();
    var offset = (castleOffset) + (scrolledY*9);
  
    $('.castle-path').css("stroke-dashoffset", offset);
    if(scrolledY>640) {
      $('.castle-path').css("stroke-dashoffset", 0);
    } 

  }

  function drawLineTwo (lineTwoOffset) {
    var path = document.querySelector('.line-two');
    var pathLength = path.getTotalLength();  // 332.88720703125
    scrolledY = $(window).scrollTop();
    var zeroOffset = lineTwoOffset+(scrolledY*2.08);
    
    
    $('.line-two').css("stroke-dashoffset", zeroOffset);
    if(scrolledY>800) {
      $('.line-two').css("stroke-dashoffset", 0);
    }
  }

  function drawWhiteLine (whiteLineOffset) {
    var path = document.querySelector('.white-line');
    var pathLength = path.getTotalLength();  // 650
    scrolledY = $(window).scrollTop();
    var zeroOffset = whiteLineOffset-(scrolledY*3.183);
    
    
    $('.white-line').css("stroke-dashoffset", zeroOffset);
    if(scrolledY>1020) {
      $('.white-line').css("stroke-dashoffset", 0);
    }

  }

  function drawLineThree (lineThreeOffset) {
    var path = document.querySelector('.line-three');
    var pathLength = path.getTotalLength();  // 
    scrolledY = $(window).scrollTop();
    var zeroOffset = lineThreeOffset-(scrolledY*3.89);
    
    
    $('.line-three').css("stroke-dashoffset", zeroOffset);
    if(scrolledY >1060) {
      $('.line-three').css("stroke-dashoffset", 0);
    }

  }

  function drawLineFour (lineFourOffset) {
    var path = document.querySelector('.line-four');
    var pathLength = path.getTotalLength();  // 1708.6005859375
    scrolledY = $(window).scrollTop();
    var zeroOffset = lineFourOffset+(scrolledY*2.2);

    $('.line-four').css("stroke-dashoffset", zeroOffset);
    // console.log(pathLength);
  }
   
  //  function to animate numbers with comma
	function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
  }

	function parallaxScroll(){
		scrolledY = $(window).scrollTop();
    
    // footer show/hide
    if(scrolledY > 960) {

      $('.take-survey-bg').show('slide');
      $('.take-survey-one').show();

      if (scrolledY > 1900) {

        $('.take-survey-bg-two').show('slide');
        $('.take-survey-two').show();

      } else {

        $('.take-survey-bg-two').fadeOut('slide');
        $('.take-survey-two').fadeOut('blind');

      }
    } else {

      $('.take-survey-bg').fadeOut('blind');
      $('.take-survey-one').fadeOut('blind');

    }


    // lines animations
		if(scrolledY > 300) {

			$('.circle-one').fadeIn();
      
      drawLineOne(1204.9405517578125); // line one function call

      if(scrolledY > 515){

        drawCastle(1155.9654541015625); // draw castle function call

        if(scrolledY > 640){

          drawLineTwo(332.88720703125); // line two function call
          
          if (scrolledY > 815){

            $('.circle-two').fadeIn();
            drawWhiteLine(650); // White line function call

            if(scrolledY > 1000) {

              drawLineThree(243); // line three function call
              $('.fact-one').fadeIn(1000);

              if(flag==true){

                } else {
                  // Animate 30,000,000 when scrolled
                  flag=true;
                  $({spanValue: 1000000}).animate({spanValue: 30000000}, {
                   duration: 2000,
                   easing:'linear', 
                  step: function() { 
                   $('.number').html(commaSeparateNumber(Math.floor(this.spanValue)));
                   },
                  complete: function(){
                    $('.number').html(commaSeparateNumber(this.spanValue));   
                  }
                });

                  // end of 30, 000, 000 animation
              } 
              if(scrolledY > 1060) {

                drawLineFour(1708.6005859375) // line four function call

                if (scrolledY > 1700) {

                  $('.center-circle').show('scale',{percent:100, origin:['200','0']},1000);
                  $('.circle-con1').delay(800).fadeIn();
                  $('.circle-con2').delay(800).fadeIn();
                  $('.circle-con3').delay(800).fadeIn();

                } else {

                  // $('.circle-con1').hide();
                  // $('.circle-con2').hide();
                  // $('.circle-con3').hide();
                  // $('.center-circle').fadeOut();

                }

              } else {

                $('.line-four').css("stroke-dashoffset", 1708.6005859375); //line four function reset

              } 


            } else {
              // $('.annual-visitor').fadeOut(1000);
             $('.line-three').css("stroke-dashoffset", 243); // line three function reset

            }


          } else {

            $('.white-line').css("stroke-dashoffset", 650); // white line function reset
            // $('.circle-two').fadeOut();

          }
          
            // scrolled 1000 place here

        } else {

          $('.line-two').css("stroke-dashoffset", 332.88720703125); // line two function reset

        }
      } else {

        $('.castle-path').css("stroke-dashoffset", 1155.9654541015625); //castle function reset

      }
    } else {

      flag=false;
      // $('.circle-one').fadeOut();
      $('.fact-one').fadeOut(1000);
      $('.line-one').css("stroke-dashoffset", 1204.9405517578125); //line one function reset

    }

    
  }

    $(window).bind('scroll', function(e){
     parallaxScroll();
     // console.log($(window).scrollTop());
    });



    // $('.nav-one').hover(function(){
    //   // mouse enter
    //   $('.tool-one').css('display','block');
    //   $('.one').removeClass('active');
    // }, function(){
    //   // mouse leave
    //   $('.tool-one').css('display','none');
    // });

    // $('.nav-two').hover(function(){
    //   // mouse enter
    //   $('.tool-two').css('display','block');
    //   $('.two').removeClass('active');
    // }, function(){
    //   // mouse leave
    //   $('.tool-two').css('display','none');
    // });

});

