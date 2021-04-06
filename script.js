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


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}