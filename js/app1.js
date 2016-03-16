
var shape;
$(document).ready(function(){
 function menu_click(x){
   var shape=x;
   var source,value;
   $('.menu').click(function(){
    var id=$(this).attr("data-type");
    if(id!='shapes')
    {
      $('.show').hide();
      $('.'+ shape+'-'+id).show();
      $('.'+id).click(function(){
      //if(id!='top'||'leg')
      //{
      var size=$(this).attr("data-size");
      var num=$(this).attr("data-num");
      var sheesham='sheesham',natural1='natural1',natural2='natural2';
       if(id!='sizes')
       source=tables_data[id][shape][size][num][sheesham][natural1];
       else{
           if(shape=='circle')
             value=40;
           else
             value=25;
        source=tables_data[id][shape][size][num][sheesham][value][natural1];
       }

       //var source=$('.'+id+'-'+size).attr('src');
      if(id=='sizes')
       $('.main-top').attr("src",source);
      else
       $('.main-bottom').attr("src",source);
      //}
      //else
      //{
      //    if(id=='top'){
      //        $('.first-top').click(function(){
      //            var first='first',top='top';
      //            var source=$('.'+id+'-'+size+'-'+first+'-'+top).attr('src');
      //             $('.main-top').attr("src",source);
      //        })
      //
      //        $('.second-top').click(function(){
      //            var source=$('.'+id+'-'+size).attr('src');
      //             $('.main-bottom').attr("src",source);
      //        })
      //    }
      //}
      })
    }
    else{
        $('.'+id).show();
        $('.'+id).click(function(){

        })
    }
   })
 }


  //
  //$('.menu').click(function(){
  //  var id=$(this).attr("data-type");
  //     $('.show').hide();
  //     $('.'+id).show();
  //  })
  })

$('.shapes').click(function(){
    var shape=$(this).attr("data-shape");
    var size=$(this).attr("data-size");
    var value=$(this).attr("data-value");
    var bottom=$(this).attr("data-bottom");
    var num=$(this).attr("data-num");
    var sheesham='sheesham',natural1='natural1',natural2='natural2',sizes='sizes',top1='top1';

    var topsource=tables_data[sizes][shape][size][top1][sheesham][value][natural2];
    var bottomsource=tables_data[bottom][shape][size][num][sheesham][natural2];

    $('.main-top').attr("src",topsource);
    $('.main-bottom').attr("src",bottomsource);

    $('.top').click(function(){
        var natural= $(this).attr('data-type');
        var topsource=tables_data[sizes][shape][size][top1][sheesham][value][natural];
        $('.main-top').attr("src",topsource);
    })
    $('.leg').click(function(){
        var natural= $(this).attr('data-type');
        var bottomsource=tables_data[bottom][shape][size][num][sheesham][natural];
        $('.main-bottom').attr("src",bottomsource);
    })
    menu_click(shape);
})

//function toplegclick(x,y,a,b,c,d,id){
//    var shape= x,natural= y,size= a,value= b,bottom= c,num= d,id=id,sizes='sizes';
//    if(id=='top')
//    {
//         var topsource=tables_data[sizes][shape][size]['top1']['sheesham'][value][natural];
//         $('.main-top').attr("src",topsource);
//    }
//    else
//    {
//        var bottomsource=tables_data[bottom][shape][size][num]['sheesham'][natural];
//        $('.main-bottom').attr("src",bottomsource);
//    }
//}

$('.top').click(function(){
    var natural= $(this).attr('data-type'),shape='rectangle',sizes='sizes',top1='top1',size='3048',sheesham='sheesham',value='25';
    var topsource=tables_data[sizes][shape][size][top1][sheesham][value][natural];
     $('.main-top').attr("src",topsource);
})
$('.leg').click(function(){
    var natural= $(this).attr('data-type'),shape='rectangle',sizes='sizes',top1='top1',size='3048',sheesham='sheesham',value='25';
    var bottomsource=tables_data[sizes][shape][size][top1][sheesham][value][natural];
    $('.main-bottom').attr("src",bottomsource);
})
var x ='rectangle';
menu_click(x);

function menu_click(x){
   var shape= x,source,value;
   $('.menu').click(function(){
    var id=$(this).attr("data-type");
     //if(id=='top'||'leg')
     //{
     //    var natural=$(this).attr("data-type");
     //    toplegclick(shape,natural,a,b,c,d,id);
     //}
     //
    if((id!='shapes'))
    {
      $('.show').hide();
      $('.'+ shape+'-'+id).show();
      $('.'+id).click(function(){
        if(id!='top'||'leg') {
            var size = $(this).attr("data-size");
            var num = $(this).attr("data-num");
            var sheesham = 'sheesham', natural1 = 'natural1', natural2 = 'natural2';
            if (id != 'sizes') {
                source = tables_data[id][shape][size][num][sheesham][natural2];
                $('.main-bottom').attr("src", source);
            }
            else {
                if (shape == 'circle')
                    value = 40;
                else
                    value = 25;
                source = tables_data[id][shape][size][num][sheesham][value][natural2];
                $('.main-top').attr("src", source);
            }
       }
       else
      {
          if(id=='top')
          {
              $('.top').click(function(){
                   var natural= $(this).attr('data-type');
                 source=tables_data[id][shape][size][num][sheesham][value][natural];
                 $('.main-top').attr("src",source);
              })
          }
          else {
               var natural= $(this).attr('data-type');
           source=tables_data[id][shape][size][num][sheesham][natural];
           $('.main-bottom').attr("src",source);
          }
      }
      })
    }
   })
 }