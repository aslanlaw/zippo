$( document ).ready(function() {
	
	$("#clickbox").click(function(){
		$("#clickbox").hide();
	

	//loading screen counter
	// Animate the element's value from x to y:
 	$({someValue: 0}).animate({someValue: 34.012}, {
      	duration: 3000,
      	easing:'swing', // can be anything
      	step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#load-counter').text(commaSeparateNumber((this.someValue).toFixed(3)) + "%");
      	}
  	});

 	function commaSeparateNumber(val){
    	while (/(\d+)(\d{3})/.test(val.toString())){
      	val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    	}
    	return val;
  	}

  	
	//fade in word LIT
  	setTimeout(function(){
  		$('#lit').fadeIn("fast");}, 3400);

  	//fade out the whole loading page
  	setTimeout(function(){
  		$('#loading').fadeOut(3000);}, 4000);

  	});

  	//(FAKE CODE) when clicking on enter button
  	$("div.zippo-signin").click(function(){
  		$("#counter").replaceWith('<div id="counter"> <a href="../unlocked/"> <p> 34.013% </p> </a> </div>');

		$("#lighting").fadeIn();
			$("#lighting").fadeOut();

  	});


  	//showing overlay when clicking about  
    $("div.about").click(function(){
  		$("#overlay-about").show();
	});

	//hiding about overlay when clicking outside of the content box
	$(document).mouseup(function (e){
    	var container = $("#content-about");

    	if (!container.is(e.target) && container.has(e.target).length === 0){
        	$("#overlay-about").hide();
    	}
	});



	//showing overlay when clicking share
    $("div.social_share").click(function(){
  		$("#overlay-share").show();
	});

	//hiding about overlay when clicking outside of the content box
	$(document).mouseup(function (e){
   		var container = $("#content-share");

    	if (!container.is(e.target) && container.has(e.target).length === 0){
        	$("#overlay-share").hide();
    	}
	});
});