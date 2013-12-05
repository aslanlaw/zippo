$( document ).ready(function() {
	

  swfobject.registerObject("video", "9.0.115", "expressInstall.swf");

  // resize the flash DIV for the window width
  $("div.vid").css("height", $(window).width());

  // add listener to resize flash on window resize
  $(window).resize(function() {
    $("div.vid").css("height", $(window).width());
  });


  //FAKE CODE fade in lights
  setTimeout(function(){
      $('#lighting').fadeIn(3000);}, 500);

  //fake code fade in montage
  setTimeout(function(){
      $('#overlay-montage').fadeIn(2500);}, 4000);
  	

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