$(window).resize(function(){

  if ($(window).width() < 700)
  {
  	$('.choice-holder').removeClass('col-xs-4');
  	$('.choice-holder').addClass('col-xs-6');
    for(var i = 0; i < $('.col-xs-4').length; i+=3) {
      $('.col-xs-6').slice(i, i+3).wrapAll("<div class='row'><div class='container'></div></div>");
    }
    $('button').css('font-size','25px');

  } else {
  	$('.choice-holder').addClass('col-xs-4');
  	$('.choice-holder').removeClass('col-xs-6');
  }
  
});
