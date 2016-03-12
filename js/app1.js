/**
 * Created by Sadhana on 4/03/2016.
 */
//$(document).foundation();
var shape;
$(document).ready(function(){

 $('#circle').click(function() {
     $('.main-top').attr("src","images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png");
     $('.main-bottom').attr("src","images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural2.jpg");
     shape='circle';
 });

    $('#rectangle').click(function(){
      $('.main-top').attr("src","images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural2.png");
      $('.main-bottom').attr("src","images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural1.jpg");
        shape='rectangle';
    });

    $('#square').click(function(){
     $('.main-top').attr("src","images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png");
     $('.main-bottom').attr("src","images/tables_data/legs/square/3636/leg1/sheesham/natural2.jpg");
        shape='square';
    })

  $('.menu').click(function(){
    var id=$(this).attr("data-type");
       $('.show').hide();
       $('.'+id).show();
        $('.'+id).click(function() {
            if (id == 'shapes')
            {
                shape = $(this).attr("data-shape");

            }

        })
    })


  alert(shape);
})

