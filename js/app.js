$(document).foundation();
$(document).ready(function(){
  $('.menu').click(function(){
   var id=$(this).attr("data-type");
    $('.show').hide();
    $('#'+id).show();
  })
})