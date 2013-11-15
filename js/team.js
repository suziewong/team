$(document).ready(function(){
  $('#main-nav>a').each(function(index, element){
    $(element).click(function(){
      $(document).scrollTo($(this).attr('scrollto'), 500)
    })
  })
  
  $('#logo>a').click(function(){
    $(document).scrollTo(0, 500)
  })
})