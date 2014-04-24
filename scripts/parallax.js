$(document).ready(function(){
 var flag = false;
  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 1155.9654541015625
    var scrolledY = $(window).scrollTop();
    var offset = (castleOffset*2) + (scrolledY*5.77);
  
    $('.castle-path').css({"stroke-dashoffset": offset});
    if(scrolledY >800) {
      $('.castle-path').css({"stroke-dashoffset": 0});
    }

  }

  function drawLineOne (pathOffset) {
    var path = document.querySelector('.line-one');
    var pathLength = path.getTotalLength();  // 601.7965087890625
    var scrolledY = $(window).scrollTop();
    var zeroOffset = pathOffset-(scrolledY*3);
    
    
    $('.line-one').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >600) {
      $('.line-one').css({"stroke-dashoffset": 0});
    }
  } 

  function drawLineTwo (pathOffset) {
    var path = document.querySelector('.line-two');
    var pathLength = path.getTotalLength();  // 332.88720703125
    var scrolledY = $(window).scrollTop();
    var zeroOffset = pathOffset+(scrolledY*3.3);
    
    
    $('.line-two').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >910) {
      $('.line-two').css({"stroke-dashoffset": 0});
    }

  }

  function drawWhiteLine (pathOffset) {
    var path = document.querySelector('.white-line');
    var pathLength = path.getTotalLength();  // 
    var scrolledY = $(window).scrollTop();
    var zeroOffset = pathOffset-(scrolledY*1.4);
    
    
    $('.white-line').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >1393) {
      $('.white-line').css({"stroke-dashoffset": 0});
    }

  }

  function drawLineThree (pathOffset) {
    var path = document.querySelector('.line-three');
    var pathLength = path.getTotalLength();  // 
    var scrolledY = $(window).scrollTop();
    var zeroOffset = pathOffset+(scrolledY*3);
    
    
    $('.line-three').css({"stroke-dashoffset": zeroOffset});
    if(scrolledY >1700) {
      $('.line-three').css({"stroke-dashoffset": 0});
    }

    console.log(scrolledY);
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
            $('.circle-two').fadeOut();
          }
            if(scrolledY >1140){
              if(flag==true){

              }else{

                // Animate 30,000,000
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
            }
            $('.annual-visitor').fadeIn(1000);
          }else {
            $('.annual-visitor').fadeOut(1000);
          }
            if(scrolledY > 1200) {
              drawLineThree(641.594482421875);
            }
        }
      }
    } else {
      $('.circle-one').fadeOut();
    }
  }

    $(window).bind('scroll', function(e){
     parallaxScroll();
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

