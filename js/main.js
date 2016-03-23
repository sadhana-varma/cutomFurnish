$(document).ready(function () {

    var figure="rectangle";
   var state={};

    function replace(html_ele, pattern, value) {
        return html_ele.replace(pattern, value);
    }

    for (var i = 0; i < menu.length; i++) {
        var ele = menu[i];
        var menu_ele = $('#listItem').html();
        menu_ele = replace(menu_ele, '%item-name%', ele.id);
        menu_ele = replace(menu_ele, '%item-name%', ele.name);
        $('#menu').append($(menu_ele));
    }

    show_shape();

    $('.shape').click(function () {
        figure = $(this).attr("data-type");
        state["figure"]=figure;
        show_fig(figure);
    })

    function  show_fig(figure){
        //if(figure=="circle")
        var source=tables_data[selected_menu][figure][size][id]["sheesham"][color];
    }

    $('.menu-click').click(function () {
        var item = $(this).attr("data-type");
        state["selected_menu"]=item;
        $('#shapes').empty();
        switch (item) {
            case 'shape':
                show_shape();
                $('.shape').click(function () {
                    figure = $(this).attr("data-type");
                    state["figure"] = figure;
                })

                break;
            case 'size':
                show_size(figure);
                break;
            case 'leg':
                show_leg(figure);
                break;
            case 'pedestal':
                show_pedestal(figure);
                break;
            case 'topcolor':
                show_color(figure);
                break;
            case 'legcolor':
                show_color(figure);
                break;
        }
    })

    //$('.click').click(function(){
    //  var shape=state["figure"];
    //  var menu_selected=state["selected_menu"];
    //  var size=state["size"];
    //  var id=state["id"];
    //  alert(shape);
    //  alert(menu_selected);
    //  alert(size);
    //  alert(id);
    //})

    function show_shape() {
        for (i = 0; i < shape.length; i++) {
            var item = shape[i];
            //var shape_ele=$('<img id='+shape[i].name+' src='+shape[i].url+'/>');
            var shape_ele = $('#bottom').html();
            shape_ele = replace(shape_ele, "%CLASS_NAME%", "shape");
            shape_ele = replace(shape_ele, "%SHAPE_NAME%", item.name);
            shape_ele = replace(shape_ele, "%IMAGE_NAME%", item.url);
            shape_ele = replace(shape_ele, "%SHAPE_NAME%", item.name);
            $('#shapes').append($(shape_ele));
        }
    }

    function show_size(figure) {
        var size_ele = $('#bottom').html();
        var sizes = size[figure];
        for (var sizes_key in sizes) {
            var size_obj = sizes[sizes_key];
            var id = size_obj.name;
            state["size"]=id;
            var source = size_obj.url;
            size_ele = replace(size_ele, "%CLASS_NAME%", "size");
            size_ele = replace(size_ele, "%SHAPE_NAME%", id);
            size_ele = replace(size_ele, "%IMAGE_NAME%", source);
            size_ele = replace(size_ele, "%SHAPE_NAME%", id);
            $('#shapes').append($(size_ele));
        }
    }

    function show_leg(figure) {
        var leg_ele = $('#bottom').html();
        var legObjects_array = legDesign[figure];
        for (var i = 0; i < legObjects_array.length; i++) {
            var legObject = legObjects_array[i];
            var id = legObject.id;
            state["id"]=id;
            var source = legObject.url;
            leg_ele = replace(leg_ele, "%CLASS_NAME%", "legDesign");
            leg_ele = replace(leg_ele, "%SHAPE_NAME%", id);
            leg_ele = replace(leg_ele, "%IMAGE_NAME%", source);
            leg_ele = replace(leg_ele, "%SHAPE_NAME%", id);
            $('#shapes').append($(leg_ele));
        }
    }

    function show_pedestal(figure) {
        var pedestal = $('#bottom').html(), pedestal_ele;
        var pedestalObjects_array = pedestalDesign[figure];
        for (var i = 0; i < pedestalObjects_array.length; i++) {
            var pedestalObject = pedestalObjects_array[i];
            var id = pedestalObject.id;
            state["id"]=id;
            var source = pedestalObject.url;
            pedestal_ele = replace(pedestal, "%CLASS_NAME%", "pedestalDesign");
            pedestal_ele = replace(pedestal_ele, "%SHAPE_NAME%", id);
            pedestal_ele = replace(pedestal_ele, "%IMAGE_NAME%", source);
            pedestal_ele = replace(pedestal_ele, "%SHAPE_NAME%", id);
            $('#shapes').append($(pedestal_ele));
        }
    }

    function show_color() {
        var color = $('#color').html(), color_ele;
        for (i = 0; i < Color.length; i++) {
            var color_obj = Color[i];
            var id = color_obj.name;
            state["color"]=id;
            var source = color_obj.url;
            color_ele = replace(color, "%color_NAME%", id);
            color_ele = replace(color_ele, "%IMAGE_NAME%", source);
            $('#shapes').append($(color_ele));
        }
    }

})

var shape = [

    {
        "name": 'circle',
        "url": 'images/shapes/circle.png'
    },

    {
        "name": 'rectangle',
        "url": 'images/shapes/rectangle.png'
    },

    {
        "name": 'square',
        "url": 'images/shapes/square.png'
    }
]

var Color = [
    {
        "name": 'walnut',
        "url": 'images/top%20color/natural1.png'
    },
    {
        "name": 'mahagony',
        "url": 'images/top%20color/natural2.png'
    }
]


var pedestalDesign = {
    "rectangle": [
        {
            "name": 'macropus',
            "id": 'pedestal1',
            "url": 'images/pedestal/pedestal1.png'
        },

        {
            "name": 'nasua',
            "id": 'pedestal2',
            "url": 'images/pedestal/pedestal2.png'
        },

        {
            "name": 'Gulo',
            "id": 'pedestal3',
            "url": 'images/pedestal/pedestal3.png'
        },

        {
            "name": 'esox',
            "id": 'pedestal4',
            "url": 'images/pedestal/pedestal4.png'
        }
    ],

    "circle": [
        {
            "name": 'macropus',
            "id": 'pedestal1',
            "url": 'images/pedestal/circle/pedestal5.png'
        },

        {
            "name": 'nasua',
            "id": 'pedestal2',
            "url": 'images/pedestal/circle/pedestal6.png'
        },

        {
            "name": 'Gulo',
            "id": 'pedestal3',
            "url": 'images/pedestal/circle/pedestal7.png'
        },

        {
            "name": 'esox',
            "id": 'pedestal4',
            "url": 'images/pedestal/circle/pedestal8.png'
        }
    ]
}


var legDesign = {
    "rectangle": [
        {
            "name": 'salmiri',
            "id": 'leg1',
            "url": 'images/legDesign/leg1.png'
        },

        {
            "name": 'Diptera',
            "id": 'leg2',
            "url": 'images/legDesign/leg2.png'
        },

        {
            "name": 'Hyla',
            "id": 'leg3',
            "url": 'images/legDesign/leg3.png'
        },

        {
            "name": 'picidae',
            "id": 'leg4',
            "url": 'images/legDesign/leg4.png'
        },

        {
            "name": 'zerda',
            "id": 'leg5',
            "url": 'images/legDesign/leg5.png'
        }
    ],

    "square": [
        {
            "name": 'salmiri',
            "id": 'leg1',
            "url": 'images/legDesign/leg1.png'
        },

        {
            "name": 'Diptera',
            "id": 'leg2',
            "url": 'images/legDesign/leg2.png'
        },

        {
            "name": 'Hyla',
            "id": 'leg3',
            "url": 'images/legDesign/leg3.png'
        },

        {
            "name": 'picidae',
            "id": 'leg4',
            "url": 'images/legDesign/leg4.png'
        },

        {
            "name": 'zerda',
            "id": 'leg5',
            "url": 'images/legDesign/leg5.png'
        }
    ]
}


var size = {
    "rectangle": {

        "3048": {
            "name": "3048",
            "url": 'images/sizes/3048.png'
        },
        "3060": {
            "name": "3060",
            "url": 'images/sizes/3060.png'
        },
        "3072": {
            "name": "3072",
            "url": 'images/sizes/3072.png'
        }

    },
    "square": {
        "3636": {
            "name": '3636',
            "url": 'images/sizes/square/3636.png'
        },
        "4242": {
            "name": '4242',
            "url": 'images/sizes/square/4242.png'
        },
        "4848": {
            "name": '4848',
            "url": 'images/sizes/square/4848.png'
        }

    },
    "circle": {
        "36": {
            "name": '36',
            "url": 'images/sizes/circle/36.png'
        },
        "42": {
            "name": '42',
            "url": 'images/sizes/circle/42.png'
        },
        "48": {
            "name": '48',
            "url": 'images/sizes/circle/48.png'
        }
    }
}


var menu = [
    {
        "name": 'Shape',
        "id": 'shape'
    },
    {
        "name": 'Size',
        "id": 'size'
    },
    {
        "name": 'LegDesign',
        "id": 'leg'
    },
    {
        "name": 'PedestalDesign',
        "id": 'pedestal'
    },

    {
        "name": 'TopColor',
        "id": 'topcolor'
    },
    {
        "name": 'LegColor',
        "id": 'legcolor'
    }
]








