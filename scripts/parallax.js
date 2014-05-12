//  RESPONSIVE BRANCH

$(document).ready(function(){
var windowWidth;
var windowHeight;
var docuHeight;
var docuWidth;
var isSmall;
var scrolledY = $(window).scrollTop();
var flag = false;


//  line animation function
  function drawLine (pathName, scrolled, lineOffset, multiplier) {
    var path = document.querySelector(pathName);
    var pathLength = path.getTotalLength();
    scrolledY = $(window).scrollTop();
    var offset = (lineOffset)-(scrolled*multiplier);
    
    
    $(path).css("stroke-dashoffset", offset);
  }

//  line animation function two
  function drawLineFunctionTwo (pathName, scrolled, lineOffset, multiplier) {
    var path = document.querySelector(pathName);
    var pathLength = path.getTotalLength();
    scrolledY = $(window).scrollTop();
    var offset = (lineOffset)+(scrolled*multiplier);
    
    
    $(path).css("stroke-dashoffset", offset);
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

        $('.take-survey-bg-two').fadeOut();
        $('.take-survey-two').fadeOut();

      }
    } else {

      $('.take-survey-bg').fadeOut();
      $('.take-survey-one').fadeOut();

    }


    // lines animations
		if(scrolledY > 300) {
			$('.circle-one').fadeIn();
       
      drawLine('.line-one',scrolledY,1204.9405517578125,7); // line one animation function call

      if(scrolledY > 515){

        $('.line-one').css("stroke-dashoffset", 0);
        drawLineFunctionTwo('.castle-path',scrolledY, 1155.9654541015625, 9); // castle animation function call

        if(scrolledY > 640){

          $('.castle-path').css("stroke-dashoffset", 0);
          drawLineFunctionTwo('.line-two',scrolledY, 332.88720703125, 2.045); // line two animation function call
          
          if (scrolledY > 815){

            drawLine('.white-line',scrolledY,650,3.183); // white line animation function call
            $('.line-two').css("stroke-dashoffset", 0);
            $('.circle-two').fadeIn();

            if(scrolledY > 1020) {

              drawLine('.line-three',scrolledY,243,3.81); // line three animation function call
              $('.white-line').css("stroke-dashoffset", 0);
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
              if(scrolledY > 1085) {

                $('.line-three').css("stroke-dashoffset", 0);
                drawLineFunctionTwo('.line-four', scrolledY,1708.6005859375,2.2) // line four animation function call

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

                $('.line-four').css("stroke-dashoffset", 1708.6005859375); //line four function reset

              } 


            } else {
              $('.annual-visitor').fadeOut(1000);
             $('.line-three').css("stroke-dashoffset", 243); // line three function reset

            }


          } else {

            $('.white-line').css("stroke-dashoffset", 650); // white line function reset
            $('.circle-two').fadeOut();

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
      $('.circle-one').fadeOut();
      $('.fact-one').fadeOut(1000);
      $('.line-one').css("stroke-dashoffset", 1204.9405517578125); //line one function reset

    }

    
  }

$(window).on('resize', function(){
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  docuWidth = $(document).width();
  docuHeight = $(document).height();

  $('.cover').css('height', windowHeight);  
  $('.circle-one').css('top', windowHeight+21);
  $('#curve-line-1').css('top', windowHeight+4);
  $('#castle').css('top', windowHeight+3);
  $('#curve-line-2').css('top', windowHeight+322);
  $('.circle-two').css('top', windowHeight+520);
  $('#white-line').css('top', windowHeight+513);
  $('#curve-line-3').css('top', windowHeight+549);
  $('#third-page-line').css('top', windowHeight+936);

  if ($(window).width() < 720) {
    $('.cover').css('height', '100%');
    $('.window-one-wrap').css('height', windowHeight);
    $('.window-two-wrap').css('height', windowHeight);
    $('.window-three-wrap').css('height', windowHeight);
    $('.window-four-wrap').css('height', windowHeight);

    $('.bg1').css('height', '100%');
    $('.bg2').css('height', '100%');
    $('.bg3').css('height', '100%');
    $('.bg4').css('height', '100%');
  } else {

    $(window).on('scroll', function(){
     parallaxScroll();
    });

    $('.cover').css('height', windowHeight);
    $('.window-one-wrap').css('height','100%');
    $('.window-wrap').css('height','962px');

    $('.bg1').css('height', '100%');
    $('.bg2').css('height', '100%');
    $('.bg3').css('height', '100%');
    $('.bg4').css('height', '100%');
  }
}).resize();


});

