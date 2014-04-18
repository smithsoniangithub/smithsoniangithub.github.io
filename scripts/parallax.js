$(document).ready(function(){



	/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "curve-line-two": {
        "strokepath": [
            {
                "path": "M207.976,224.89l0.015-0.999c0.107,0.001,43.107,0.631,86.083,26.32     c21.487,12.844,42.968,31.955,59.079,60.383C369.264,339.023,380,376.77,380,426.89h-1c0-45.556-8.99-84.517-26.717-115.802     c-14.17-25.002-33.926-45.195-58.724-60.018c-42.279-25.273-85.146-26.173-85.572-26.18H207.976",
                "duration": 600
            },
            {
                "path": "M379,426.89h1c0,89.938-24.725,137.824-52.006,163.285c-33.496,31.268-70.845,28.726-70.994,28.715     c-0.003,0-43.096,0.788-50.999,0l0.098-0.995c7.755,0.772,50.452,0.003,50.97-0.002c0.37,0.025,37.411,2.199,70.243-28.446     C361.609,557.431,379,502.742,379,426.89",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 596,
            "height": 842
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#curve-line-two').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });	





	// end of arrow one

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
		// var scrolledY = $(window).scrollTop();
		// $('.bg-1').css('top','-'+((scrolledY*0.75))+'px');
		// $('.bg-2').css('top','-'+((scrolledY*1))+'px');

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