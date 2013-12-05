$( document ).ready(function() {
	


  	

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