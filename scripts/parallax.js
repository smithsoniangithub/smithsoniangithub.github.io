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

  // line and castle animation function for device width morethan 720px
	function parallaxScroll(){
		scrolledY = $(window).scrollTop();
    
    // footer show/hide
    if(scrolledY > 640) {

      $('.take-survey-div').show('slide',{direction:'down'});
      $('.take-survey-one').show();
      $('.take-survey-two').hide();
      $('.take-survey-three').hide();
      
      if(scrolledY > 1060) {

        $('.take-survey-one').hide();
        $('.take-survey-two').show();
        $('.take-survey-three').hide();

        if(scrolledY > 2020) {

          $('.take-survey-one').hide();
          $('.take-survey-two').hide();
          $('.take-survey-three').show();
        }

      }

    } else {

      $('.take-survey-div').hide('slide',{direction:'down'});

    }


    // lines animations
		if(scrolledY > 300) {
			$('.circle-one').fadeIn();
       
      drawLine('.line-one',scrolledY,1204.9405517578125,7); // line one animation function call

      if(scrolledY > 515){

        $('.line-one').css("stroke-dashoffset", 0);
        drawLineFunctionTwo('.castle-path',scrolledY, 1155.9654541015625, 9); // castle animation function call

        if(scrolledY > 640){

          drawLineFunctionTwo('.line-two',scrolledY, 332.88720703125, 2.078); // line two animation function call
          $('.castle-path').css("stroke-dashoffset", 0);
          
          if (scrolledY > 800){

            drawLine('.white-line',scrolledY,650,3.242); // white line animation function call
            $('.line-two').css("stroke-dashoffset", 0);
            $('.circle-two').fadeIn();

            if(scrolledY > 1000) {

              drawLine('.line-three',scrolledY,243,3.87); // line three animation function call
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
              if(scrolledY > 1060) {

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

  function parallaxScrollTwo() {
    scrolledY = $(window).scrollTop();
    
    // footer show/hide
    if(scrolledY > 666) {

      $('.take-survey-bg').show('slide');
      $('.take-survey-one').show();

      if (scrolledY > 1360) {

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
    if(scrolledY > 110) {
      $('.circle-one').fadeIn();
       
      // drawLine('.line-one',scrolledY,1204.9405517578125,11); // line one animation function call
      if(scrolledY > 221) {
        drawLine('.line-one',scrolledY,1204.9405517578125,11); // line one animation function call
      
        if(scrolledY > 325){

          $('.line-one').css("stroke-dashoffset", 0);
          drawLineFunctionTwo('.castle-path',scrolledY, 1155.9654541015625, 7.09); // castle animation function call

          if(scrolledY > 490){

            $('.castle-path').css("stroke-dashoffset", 0);
            drawLineFunctionTwo('.line-two',scrolledY, 332.88720703125, 1.34); // line two animation function call
            
            if (scrolledY > 750){

              drawLine('.white-line',scrolledY,650,5.2); // white line animation function call
              $('.line-two').css("stroke-dashoffset", 0);
              $('.circle-two').fadeIn();

              if(scrolledY > 870) {

                drawLine('.line-three',scrolledY,243,5.01); // line three animation function call
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
                if(scrolledY > 920) {

                  $('.line-three').css("stroke-dashoffset", 0);
                  drawLineFunctionTwo('.line-four', scrolledY,1708.6005859375,3) // line four animation function call

                  if (scrolledY > 1280) {

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
            

          } else {

            $('.line-two').css("stroke-dashoffset", 332.88720703125); // line two function reset

          }
        } else {

          $('.castle-path').css("stroke-dashoffset", 1155.9654541015625); //castle function reset

        }
      } else {
        $('.line-one').css("stroke-dashoffset", 1204.9405517578125); //line one function reset
      }
    } else {

      flag=false;
      $('.circle-one').fadeOut();
      $('.fact-one').fadeOut(1000);  

    } 
  }


$(window).on('resize', function(){
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  docuWidth = $(document).width();
  docuHeight = $(document).height();


  if ($(window).width() < 720) {
    $('.cover').css('height', '100%');
    $('.window-one-wrap').css('height', '100%');
    $('.window-two-wrap').css('height', '100%');
    $('.window-three-wrap').css('height', '100%');
    $('.window-four-wrap').css('height', '100%');

    $('.bg1').css('height', '100%');
    $('.bg2').css('height', '100%');
    $('.bg3').css('height', '100%');
    $('.bg4').css('height', '100%');
  } else {

    $('.cover').css('height', windowHeight);
    $('.window-one-wrap').css('height','100%');

    $('.bg1').css('height', '100%');
    $('.bg2').css('height', '100%');
    $('.bg3').css('height', '100%');
    $('.bg4').css('height', '100%');
  }
}).resize();

$(window).on('scroll', function(){
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  docuWidth = $(document).width();
  docuHeight = $(document).height();

  if(windowWidth <= 720) {
    console.log(scrolledY);
    // parallaxScrollTwo();
  } else {
    parallaxScroll();
  }
});


});

