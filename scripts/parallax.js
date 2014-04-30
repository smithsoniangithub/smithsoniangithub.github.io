
$(document).ready(function(){
 var flag = false;
  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 1155.9654541015625
    var scrolledY = $(window).scrollTop();
    var offset = (castleOffset*2) + (scrolledY*5.77);
  
    $('.castle-path').css({"stroke-dashoffset": offset});
    if(scrolledY>800) {
      $('.castle-path').css({"stroke-dashoffset": 0});
    } 

  }

  function drawLineOne (lineOneOffset) {
    var path = document.querySelector('.line-one');
    var pathLength = path.getTotalLength();  // 601.7965087890625
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineOneOffset-(scrolledY*3);
    
    
    $('.line-one').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>600) {
      $('.line-one').css({"stroke-dashoffset": 0});
    }
  } 

  function drawLineTwo (lineTwoOffset) {
    var path = document.querySelector('.line-two');
    var pathLength = path.getTotalLength();  // 332.88720703125
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineTwoOffset+(scrolledY*3.3097);
    
    
    $('.line-two').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>905) {
      $('.line-two').css({"stroke-dashoffset": 0});
    }
  }

  function drawWhiteLine (whiteLineOffset) {
    var path = document.querySelector('.white-line');
    var pathLength = path.getTotalLength();  // 650
    var scrolledY = $(window).scrollTop();
    var zeroOffset = whiteLineOffset-(scrolledY*2.85);
    
    
    $('.white-line').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY>1150) {
      $('.white-line').css({"stroke-dashoffset": 0});
    }

  }

  function drawLineThree (lineThreeOffset) {
    var path = document.querySelector('.line-three');
    var pathLength = path.getTotalLength();  // 
    var scrolledY = $(window).scrollTop();
    var zeroOffset = lineThreeOffset-(scrolledY);
    
    
    $('.line-three').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >1530) {
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

		if(scrolledY > 400) {

			$('.circle-one').fadeIn();
      drawLineOne(601.7965087890625); // line one function call

      if(scrolledY > 600){

        drawCastle(1155.9654541015625); // draw castle function call

        if(scrolledY > 800){

          drawLineTwo(332.88720703125); // line two function call
          
          if (scrolledY > 910){

            $('.circle-two').fadeIn();
            drawWhiteLine(650); // White line function call

          } else {

            $('.white-line').css({"stroke-dashoffset": 650}); // white line function reset
            $('.circle-two').fadeOut();

          }
          if(scrolledY >1140){

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
          } else {

            $('.annual-visitor').fadeOut(1000);
          }

          if(scrolledY > 700) {

            drawLineThree(641.594482421875); // line three function call

            if(scrolledY > 1300) {

              drawLineFour(1708.6005859375) // line four function call

              if (scrolledY > 1700) {

                $('.center-circle').show('scale',{percent:100, origin:['200','0']},1000);
                $('.circle-con1').delay(800).fadeIn();
                $('.circle-con2').delay(800).fadeIn();
                $('.circle-con3').delay(800).fadeIn();

              } else {
                $('.circle-con1').hide();
                $('.circle-con2').hide();
                $('.circle-con3').hide();
                $('.center-circle').fadeOut();

              }

            } else {

              $('.line-four').css({"stroke-dashoffset": 1708.6005859375}); //line four function reset

            }
          } else {

            $('.line-three').css({"stroke-dashoffset": 641.594482421875}); // line three function reset

          }
        } else {

          $('.line-two').css({"stroke-dashoffset": 332.88720703125}); // line two function reset

        }
      } else {

        $('.castle-path').css({"stroke-dashoffset": 1155.9654541015625}); //castle function reset

      }
    } else {
      flag=false;
      $('.circle-one').fadeOut();
      $('.line-one').css({"stroke-dashoffset": 601.7965087890625}); //line one function reset

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

