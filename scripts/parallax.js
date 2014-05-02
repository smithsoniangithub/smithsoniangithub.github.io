//  RESPONSIVE BRANCH

$(document).ready(function(){
var windowWidth;
var isSmall;
var flag = false;

window.onresize = function() {
  windowWidth = $(window).width();
  isSmall = false;
  console.log(windowWidth);
  if(isSmall == true){

  }else {
    if(windowWidth < 720){
      isSmall=true;
      console.log('test');
      $('.center-circle').fadeIn();
    }
  }
}





 
  function drawLineOne (lineOneOffset) {
    var path = document.querySelector('.line-one');
    var pathLength = path.getTotalLength();  // 601.7965087890625
    var scrolledY = $(window).scrollTop();
    var zeroOffset = (lineOneOffset)-(scrolledY*5.72);
    
    
    $('.line-one').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>430) {
      $('.line-one').css({"stroke-dashoffset": 0});
    }
  } 

  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 1155.9654541015625
    var scrolledY = $(window).scrollTop();
    var offset = (castleOffset) + (scrolledY*5.364);
  
    $('.castle-path').css({"stroke-dashoffset": offset});
    if(scrolledY>645) {
      $('.castle-path').css({"stroke-dashoffset": 0});
    } 

  }

  function drawLineTwo (lineTwoOffset) {
    var path = document.querySelector('.line-two');
    var pathLength = path.getTotalLength();  // 332.88720703125
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineTwoOffset+(scrolledY*2.05);
    
    
    $('.line-two').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>815) {
      $('.line-two').css({"stroke-dashoffset": 0});
    }
  }

  function drawWhiteLine (whiteLineOffset) {
    var path = document.querySelector('.white-line');
    var pathLength = path.getTotalLength();  // 650
    var scrolledY = $(window).scrollTop();
    var zeroOffset = whiteLineOffset-(scrolledY*3.175);
    
    
    $('.white-line').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>1030) {
      $('.white-line').css({"stroke-dashoffset": 0});
    }

  }

  function drawLineThree (lineThreeOffset) {
    var path = document.querySelector('.line-three');
    var pathLength = path.getTotalLength();  // 
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineThreeOffset-(scrolledY*3.148);
    
    
    $('.line-three').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >1160) {
      $('.line-three').css({"stroke-dashoffset": 0});
    }

  }

  function drawLineFour (lineFourOffset) {
    var path = document.querySelector('.line-four');
    var pathLength = path.getTotalLength();  // 1708.6005859375
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineFourOffset+(scrolledY*2.2);

    $('.line-four').css({"stroke-dashoffset": zeroOffset});
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
		var scrolledY = $(window).scrollTop();

		if(scrolledY > 300) {

			$('.circle-one').fadeIn();
      drawLineOne(863.447509765625); // line one function call

      if(scrolledY > 430){

        drawCastle(1155.9654541015625); // draw castle function call
        // $('#windowTwo').addClass('fixed');

        if(scrolledY > 645){

          drawLineTwo(332.88720703125); // line two function call
          
          if (scrolledY > 815){

            $('.circle-two').fadeIn();
            drawWhiteLine(650); // White line function call

            if(scrolledY > 1080) {

              drawLineThree(243); // line three function call
              $('.annual-visitor').fadeIn(1000);

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
              if(scrolledY > 1160) {

                drawLineFour(1708.6005859375) // line four function call

                if (scrolledY > 1700) {

                  // $('.center-circle').show('scale',{percent:100, origin:['200','0']},1000);
                  // $('.circle-con1').delay(800).fadeIn();
                  // $('.circle-con2').delay(800).fadeIn();
                  // $('.circle-con3').delay(800).fadeIn();

                } else {
                  // $('.circle-con1').hide();
                  // $('.circle-con2').hide();
                  // $('.circle-con3').hide();
                  // $('.center-circle').fadeOut();

                }

              } else {

                $('.line-four').css({"stroke-dashoffset": 1708.6005859375}); //line four function reset

              } 


            } else {
              $('.annual-visitor').fadeOut(1000);
             $('.line-three').css({"stroke-dashoffset": 243}); // line three function reset

            }


          } else {

            $('.white-line').css({"stroke-dashoffset": 650}); // white line function reset
            $('.circle-two').fadeOut();

          }
          
            // scrolled 1000 place here

        } else {

          $('.line-two').css({"stroke-dashoffset": 332.88720703125}); // line two function reset

        }
      } else {

        $('.castle-path').css({"stroke-dashoffset": 1155.9654541015625}); //castle function reset

      }
    } else {

      flag=false;
      $('.circle-one').fadeOut();
      $('.line-one').css({"stroke-dashoffset": 863.447509765625}); //line one function reset

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

