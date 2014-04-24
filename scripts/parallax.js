$(document).ready(function(){
 var flag = false;
  function drawCastle (castleOffset) {
    var castlepath = document.querySelector('.castle-path');
    var castlePathLength = castlepath.getTotalLength();  // 2318.875732421875
    var scrolledY = $(window).scrollTop();
    var offset = (castleOffset*2) + (scrolledY*1.92);
  
    $('.castle-path').css({"stroke-dashoffset": offset});
    if(scrolledY >1200) {
      $('.castle-path').css({"stroke-dashoffset": 0});
    }

    // console.log(castlePathLength);
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
   

	function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
  }

	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();

		if(scrolledY > 400) {
			$('.blue-circle').fadeIn();
      drawLineOne(601.7965087890625);

      if(scrolledY > 600){
        drawCastle(1155.9654541015625);
        if(scrolledY > 830){
          if(flag==true){

          }else{
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
          if(scrolledY >1200){
            $('.annual-visitor').fadeIn(1000);
          }else {
            $('.annual-visitor').fadeOut(1000);
          }
        }
      }
    } else {
      $('.blue-circle').fadeOut();
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

