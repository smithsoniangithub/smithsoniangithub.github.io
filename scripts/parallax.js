$(document).ready(function(){

	var myVideo = $('.video');
	if (typeof myVideo.loop == 'boolean') { // loop supported
	    myVideo.loop = true;
	} else { // loop property not supported
	    myVideo.on('ended', function () {
	    this.currentTime = 0;
	    this.play();
	    }, false);
	}
	$('.video').get(0).play();


	$(window).bind('scroll', function(e){
		parallaxScroll();
	});


	function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
  }

	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		$('.bg-1').css('top','-'+((scrolledY*0.75))+'px');
		$('.bg-2').css('top','-'+((scrolledY*1))+'px');

		if(scrolledY < 400) {
			$('.one').addClass('active');
			$('.two').removeClass('active');
		} else if (scrolledY >= 400) {
				$('.one').removeClass('active');
				$('.two').addClass('active');
				$('.blue-circle').fadeIn(1000);

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
	}

});