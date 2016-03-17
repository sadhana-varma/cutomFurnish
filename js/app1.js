$(document).ready(function() {
var shape='rectangle';
          $('.shapes').click(function(){
               shape=$(this).attr('data-shape');
          });

    $('.menu').click(function () {
         var id = $(this).attr("data-type");
          $('.show').hide();
          if(id=='shapes')
              $('#shapes').show();
          $('.'+shape+'-'+id).show();
        });

    $('.click').click(function() {
        var bottomsource,topsource;
        var shape = $(this).attr("data-shape");
        var size = $(this).attr("data-size");
        var value = $(this).attr("data-value");
        var bottom = $(this).attr("data-bottom");
        var num = $(this).attr("data-num");
        var main=$(this).attr("data-main");
        var sheesham = 'sheesham', natural1 = 'natural1', natural2 = 'natural2', sizes = 'sizes', top1 = 'top1';
        if(main==='main')
        {
            bottomsource = tables_data[bottom][shape][size][num][sheesham][natural2];
            topsource = tables_data[sizes][shape][size][top1][sheesham][value][natural2];
            $('.main-top').attr("src", topsource);
            $('.main-bottom').attr("src", bottomsource);
        }
        if(bottom==="legs"||bottom==='pedestals')
        {
            bottomsource = tables_data[bottom][shape][size][num][sheesham][natural2];
            $('.main-bottom').attr("src", bottomsource);
        }
        else
        {
            topsource = tables_data[sizes][shape][size][top1][sheesham][value][natural2];
            $('.main-top').attr("src", topsource);
        }
    })

    $('.natural').click(function(){
        var natural=$(this).attr("data-type");
        var top=$('.main-top').attr("src");
        var bottom=$('.main-bottom').attr("src");
        var topres=top.split('\\');
        var botres=bottom.split('\\');
        alert(topres);
        $.each(top,function(index,value){
           var id=value;
            alert(id);
        })
    })
});



  tables_data= {
    "legs": {
      "rectangle": {
        "3048": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3048\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3048\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3060": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3060\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3060\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3072": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3072\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3072\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3354": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3354\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3354\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3360": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3360\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3360\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3372": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3372\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3372\\leg9\\sheesham\\natural2.jpg"
            }
          }
        },
        "3672": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg11\\sheesham\\natural2.jpg"
            }
          },
          "leg12": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg12\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg12\\sheesham\\natural2.jpg"
            }
          },
          "leg13": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg13\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg13\\sheesham\\natural2.jpg"
            }
          },
          "leg14": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg14\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg14\\sheesham\\natural2.jpg"
            }
          },
          "leg15": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg15\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg15\\sheesham\\natural2.jpg"
            }
          },
          "leg16": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg16\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg16\\sheesham\\natural2.jpg"
            }
          },
          "leg17": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg17\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg17\\sheesham\\natural2.jpg"
            }
          },
          "leg18": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg18\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg18\\sheesham\\natural2.jpg"
            }
          },
          "leg2": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg2\\sheesham\\natural2.jpg"
            }
          },
          "leg3": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg3\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg3\\sheesham\\natural2.jpg"
            }
          },
          "leg4": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg4\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg4\\sheesham\\natural2.jpg"
            }
          },
          "leg5": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg5\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg5\\sheesham\\natural2.jpg"
            }
          },
          "leg6": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg6\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg6\\sheesham\\natural2.jpg"
            }
          },
          "leg7": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg7\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg7\\sheesham\\natural2.jpg"
            }
          },
          "leg8": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg8\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg8\\sheesham\\natural2.jpg"
            }
          },
          "leg9": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\rectangle\\3672\\leg9\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\rectangle\\3672\\leg9\\sheesham\\natural2.jpg"
            }
          }
        }
      },
      "square": {
        "3636": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\3636\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\3636\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\3636\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\3636\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\3636\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\3636\\leg11\\sheesham\\natural2.jpg"
            }
          }
        },
        "4242": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4242\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4242\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4242\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4242\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4242\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4242\\leg11\\sheesham\\natural2.jpg"
            }
          }
        },
        "4848": {
          "leg1": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4848\\leg1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4848\\leg1\\sheesham\\natural2.jpg"
            }
          },
          "leg10": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4848\\leg10\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4848\\leg10\\sheesham\\natural2.jpg"
            }
          },
          "leg11": {
            "sheesham": {
              "natural1": "images\\tables_data\\legs\\square\\4848\\leg11\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\legs\\square\\4848\\leg11\\sheesham\\natural2.jpg"
            }
          }
        }
      }
    },
    "pedestals": {
      "circle": {
        "36": {
          "pedestal1": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\circle\\36\\pedestal1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\circle\\36\\pedestal1\\sheesham\\natural2.jpg"
            }
          },
          "pedestal2": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\circle\\36\\pedestal2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\circle\\36\\pedestal2\\sheesham\\natural2.jpg"
            }
          }
        },
        "42": {
          "pedestal1": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\circle\\42\\pedestal1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\circle\\42\\pedestal1\\sheesham\\natural2.jpg"
            }
          },
          "pedestal2": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\circle\\42\\pedestal2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\circle\\42\\pedestal2\\sheesham\\natural2.jpg"
            }
          }
        }
      },
      "rectangle": {
        "3072": {
          "pedestal1": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\rectangle\\3072\\pedestal1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\rectangle\\3072\\pedestal1\\sheesham\\natural2.jpg"
            }
          },
          "pedestal2": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\rectangle\\3072\\pedestal2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\rectangle\\3072\\pedestal2\\sheesham\\natural2.jpg"
            }
          }
        },
        "3372": {
          "pedestal1": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\rectangle\\3372\\pedestal1\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\rectangle\\3372\\pedestal1\\sheesham\\natural2.jpg"
            }
          },
          "pedestal2": {
            "sheesham": {
              "natural1": "images\\tables_data\\pedestals\\rectangle\\3372\\pedestal2\\sheesham\\natural1.jpg",
              "natural2": "images\\tables_data\\pedestals\\rectangle\\3372\\pedestal2\\sheesham\\natural2.jpg"
            }
          }
        }
      }
    },
    "sizes": {
      "circle": {
        "36": {
          "top1": {
            "sheesham": {
              "40": {
                "natural1": "images\\tables_data\\tops\\circle\\36\\top1\\sheesham\\40\\natural1.png",
                "natural2": "images\\tables_data\\tops\\circle\\36\\top1\\sheesham\\40\\natural2.png"
              }
            }
          }
        },
        "42": {
          "top1": {
            "sheesham": {
              "40": {
                "natural1": "images\\tables_data\\tops\\circle\\42\\top1\\sheesham\\40\\natural1.png",
                "natural2": "images\\tables_data\\tops\\circle\\42\\top1\\sheesham\\40\\natural2.png"
              }
            }
          }
        }
      },
      "rectangle": {
        "3048": {
          "top1": {
            "sheesham": {
              "18": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3048\\top1\\sheesham\\18\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3048\\top1\\sheesham\\18\\natural2.png"
              },
              "25": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3048\\top1\\sheesham\\25\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3048\\top1\\sheesham\\25\\natural2.png"
              }
            }
          }
        },
          "3072": {
          "top1": {
            "sheesham": {
              "40": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3072\\top1\\sheesham\\40\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3072\\top1\\sheesham\\40\\natural2.png"
              },
              "25": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3072\\top1\\sheesham\\25\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3072\\top1\\sheesham\\25\\natural2.png"
              }
            }
          }
        },
        "3060": {
          "top1": {
            "sheesham": {
              "18": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3060\\top1\\sheesham\\18\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3060\\top1\\sheesham\\18\\natural2.png"
              },
              "25": {
                "natural1": "images\\tables_data\\tops\\rectangle\\3060\\top1\\sheesham\\25\\natural1.png",
                "natural2": "images\\tables_data\\tops\\rectangle\\3060\\top1\\sheesham\\25\\natural2.png"
              }
            }
          }
        }
      },
      "square": {
        "3636": {
          "top1": {
            "sheesham": {
              "18": {
                "natural1": "images\\tables_data\\tops\\square\\3636\\top1\\sheesham\\18\\natural1.png",
                "natural2": "images\\tables_data\\tops\\square\\3636\\top1\\sheesham\\18\\natural2.png"
              },
              "25": {
                "natural1": "images\\tables_data\\tops\\square\\3636\\top1\\sheesham\\25\\natural1.png",
                "natural2": "images\\tables_data\\tops\\square\\3636\\top1\\sheesham\\25\\natural2.png"
              }
            }
          }
        },
        "4242": {
          "top1": {
            "sheesham": {
              "18": {
                "natural1": "images\\tables_data\\tops\\square\\4242\\top1\\sheesham\\18\\natural1.png",
                "natural2": "images\\tables_data\\tops\\square\\4242\\top1\\sheesham\\18\\natural2.png"
              },
              "25": {
                "natural1": "images\\tables_data\\tops\\square\\4242\\top1\\sheesham\\25\\natural1.png",
                "natural2": "images\\tables_data\\tops\\square\\4242\\top1\\sheesham\\25\\natural2.png"
              }
            }
          }
        }
      }
    }
  }


