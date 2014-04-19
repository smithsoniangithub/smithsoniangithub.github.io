$(document).ready(function(){
  console.log($(document).scrollTop());
  function drawLineOne () {
      var pathObj = {
      "curve-line-1": {
        "strokepath": [
          {
            "path": "M207.976,224.89l0.016-0.999c0.106,0.001,43.106,0.631,86.083,26.32      c21.486,12.844,42.967,31.955,59.078,60.383C369.264,339.023,380,376.77,380,426.89h-1c0-45.556-8.99-84.517-26.718-115.802      c-14.17-25.002-33.926-45.195-58.724-60.018c-42.279-25.273-85.146-26.173-85.572-26.18H207.976",
            "duration": 3000
          },
          {
            "path": "M379,426.89h1c0,89.938-24.726,137.824-52.007,163.285c-33.495,31.268-70.845,28.727-70.993,28.715      c-0.003,0-43.097,0.787-50.999,0l0.098-0.994c7.755,0.771,50.452,0.002,50.97-0.004c0.37,0.025,37.411,2.199,70.243-28.445      C361.609,557.431,379,502.742,379,426.89",
            "duration": 3000
        }
      ],
      "dimensions": {
        "width": 596,
        "height": 842
        }
      }
    }


    $('#curve-line-1').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 1,
        "strokeColor": "#0bb3ff"
    }).lazylinepainter('paint'); 
  } 

  function drawLineTwo () {
    var pathObj = {
      "curve-line-2": {
          "strokepath": [
              {
                  "path": "M460,33.89v1h-46c-87.25-0.803-138.355,25.127-168.25,56.901      c-46.174,49.077-41.749,112.099-41.749,112.099v381.998V742.89c0,0-1.933,32.766,14.937,50.658      c6.337,6.721,15.324,11.342,28.063,11.342v0.998c-11.812,0-21.498-3.92-28.79-11.652c-16.97-18-15.29-50.051-15.212-51.346      V585.888l0.004-381.929c-0.046-0.634-3.925-64.022,42.019-112.853C281.398,52.444,338.252,33.193,414,33.89H460",
                  "duration": 4000
              }
          ],
          "dimensions": {
              "width": 596,
              "height": 842
          }
      }
    }; 
   
   
   $('#curve-line-2').lazylinepainter( 
     {
      "svgData": pathObj,
      "strokeWidth": 1,
      "strokeColor": "#0bb3ff"
    }).lazylinepainter('paint'); 

  }

	function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
  }

	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		// $('.bg-1').css('top','-'+((scrolledY*0.75))+'px');
		// $('.bg-2').css('top','-'+((scrolledY*1))+'px');

		if(scrolledY < 400) {
			$('.one').addClass('active');
			$('.two').removeClass('active');
		} else if (scrolledY > 400) {
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
        drawLineOne();
        drawLineTwo();
		  }
       


	}

    $(window).bind('scroll', function(e){
     parallaxScroll();
    });
});