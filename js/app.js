//$(document).foundation();
$(document).ready(function(){
  $('.menu').click(function(){
     var id=$(this).attr("data-type");
      $('.'+id).click(function(){

      var shape = $(this).attr("data-shape");
          $('.menu').click(function(){
           var id=$(this).attr("data-type");
              if(id!='shapes')
              {
                  $('.show').hide();
                 $('.'+ shape+'-'+id).show();
                  $('.click').click(function(){
                      var size=$(this).attr("data-size");
                      var source=$('.'+shape+'-'+size).attr('src');
                      $('.main-top').attr("src",source);

                  })
              }
          })
      })
  });




    $('#circle').click(function() {
     $('.main-top').attr("src","images/main/shape-main/circle-main.png");
     //$('#main-bottom').attr("src","images/main/circle-main-bottom.png");
 });

    $('#rectangle').click(function(){
      $('.main-top').attr("src","images/main/shape-main/rectangle-main-top.png ")
    });

    $('#square').click(function(){
     $('.main-top').attr("src","images/main/shape-main/square-main-top.png ")
    })

});