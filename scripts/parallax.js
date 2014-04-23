$(document).ready(function(){

  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 2318.875732421875
    var scrolledY = $(window).scrollTop();
    var offset = castleOffset + (scrolledY*6.62);
  
    $('.castle-path').css({"stroke-dashoffset": offset});
    if(scrolledY >1000) {
      $('.castle-path').css({"stroke-dashoffset": 0});
    }

    console.log(castlePathLength);
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

  // function drawLineTwo () {
    
  // }
   

	// function commaSeparateNumber(val){
 //    while (/(\d+)(\d{3})/.test(val.toString())){
 //      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 //    }
 //    return val;
 //  }

	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
    // console.log(scrolledY);

		if(scrolledY > 400) {
			$('.blue-circle').fadeIn();
      drawLineOne(601.7965087890625);
      if(scrolledY > 700){
        drawCastle(2319.67138671875);
      }
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

