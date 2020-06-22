function onLoad() {
    $('.burger').click(() => $('nav > ul').toggleClass('navHidden'));
  }
  
  $(onLoad)



  function scrollToTop() { 
    $(window).scrollTop(0); 
  }



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 450
       ) {
	    $("nav").css("background" , "white");
	  }

	  else{
		  $("nav").css("background" , "transparent");  	
	  }
  })
})




























