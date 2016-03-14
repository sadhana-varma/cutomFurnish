
var shape;
$(document).ready(function(){

 $('#circle').click(function() {
     $('.main-top').attr("src","images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png");
     $('.main-bottom').attr("src","images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural2.jpg");
     shape='circle';
     menu_click(shape);
     $('.first-top-circle').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png");
   })

   $('.second-top-circle').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png");
   })
  $('.first-leg-circle').click(function(){
   $('.main-bottom').attr("src","images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural1.jpg");
  })

  $('.second-leg-circle').click(function(){
    $('.main-bottom').attr("src","images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural2.jpg");
  })

 });


 $('#rectangle').click(function(){
      $('.main-top').attr("src","images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural2.png");
      $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural2.jpg");
      shape='rectangle';
      menu_click(shape);
     $('.first-top-rectangle').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural1.png");
   })

   $('.second-top-rectangle').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png");
   })

  $('.first-leg-rectangle').click(function(){
   $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural1.jpg");
  })

  $('.second-leg-rectangle').click(function(){
    $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural2.jpg");
  })

 });

 $('#square').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png");
     $('.main-bottom').attr("src","images/tables_data/legs/square/3636/leg1/sheesham/natural2.jpg");
     shape='square';
     menu_click(shape);
       $('.first-top-square').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png");
   })
  $('.second-top-square').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png");
   })
    $('.first-leg-square').click(function(){
   $('.main-bottom').attr("src","images/tables_data/legs/square/3636/leg1/sheesham/natural2.jpg");
  })

  $('.second-leg-square').click(function(){
    $('.main-bottom').attr("src","images/tables_data/legs/square/3636/leg1/sheesham/natural1.jpg");
  })
 });


  $('.first-top').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png");
   })

   $('.second-top').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png");
   })

  $('.first-leg').click(function(){
   $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural1.jpg");
  })

  $('.second-leg').click(function(){
    $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural2.jpg");
  })


 function menu_click(x){
   var shape=x;
   $('.menu').click(function(){
    var id=$(this).attr("data-type");
    if(id!='shapes')
    {
      $('.show').hide();
      $('.'+ shape+'-'+id).show();
      $('.'+id).click(function(){
      if(id!='top'||'leg')
      {
      var size=$(this).attr("data-size");
      var source=$('.'+id+'-'+size).attr('src');
      if(id=='sizes')
       $('.main-top').attr("src",source);
      else
       $('.main-bottom').attr("src",source);
      }
      else
      {
          if(id=='top'){
              $('.first-top').click(function(){
                  var first='first',top='top';
                  var source=$('.'+id+'-'+size+'-'+first+'-'+top).attr('src');
                   $('.main-top').attr("src",source);
              })

              $('.second-top').click(function(){
                  var source=$('.'+id+'-'+size).attr('src');
                   $('.main-bottom').attr("src",source);
              })
          }
      }
      })
    }
   })
 }



  $('.menu').click(function(){
    var id=$(this).attr("data-type");
       $('.show').hide();
       $('.'+id).show();
    })
  })

