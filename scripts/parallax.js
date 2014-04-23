$(document).ready(function(){

  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 1040.77587890625 
    var scrolledY = $(window).scrollTop();
    var offset = castleOffset-(scrolledY*3);
    
    $('.castle-path').css({"stroke-dashoffset": offset});
    
  }

  drawCastle();

  function drawLineOne (pathOffset) {
    var path = document.querySelector('.line-one');
    var pathLength = path.getTotalLength();  // 601.7965087890625
    var scrolledY = $(window).scrollTop();
    var zeroOffset = pathOffset-(scrolledY*3);
    
    
    $('.line-one').css({"stroke-dashoffset": zeroOffset});
    
  } 

  function drawLineTwo () {
    
  }
   

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
			$('.blue-circle').fadeIn(1000);
      drawLineOne(601.7965087890625);
      if(scrolledY > 700){
        drawCastle(1040.77587890625 );
        if(scrolledY > 1000) {
          // drawLineTwo();
        }
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

