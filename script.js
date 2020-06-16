function onLoad() {
    $('.burger').click(() => $('nav > ul').toggleClass('navHidden'));
  }
  
  $(onLoad)

  function scrollToTop() { 
    $(window).scrollTop(0); 
}