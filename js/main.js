$(document).ready(function () {

    var selected_menu;
    var default_value = get_first_menu_item(tables_icons);
    var state = {
        'selected_menu': default_value
    };

    get_default_image(tables_data, 'top')

    function get_default_image(data, id) {
        var values = data[id]["values"];
        var dependancy = data[id]["dep"];

        for (var i = 0; i < dependancy.length; i++) {
            var item = get_current_selected_value(data[id]["dep"][i]);
            values = values[item];
        }
        var top_source = values['top_url'];
        var bottom_source = values['bottom_url'];
        $('.main-top').attr('src', top_source);
        $('.main-bottom').attr('src', bottom_source);
    }

    function replace(html_ele, pattern, value) {
        return html_ele.replace(pattern, value);
    }

    function get_first_menu_item(icons) {
        for (var key in icons)
            return key;
    }

    for (var key in tables_icons) {
        var menu_ele = $('#listItem').html();
        menu_ele = replace(menu_ele, '%item-name%', key);
        menu_ele = replace(menu_ele, '%idValue%', tables_icons[key].id);
        menu_ele = replace(menu_ele, '%item-name%', key);
        $('#menu').append($(menu_ele));
    }

    show(state['selected_menu']);
    click();

    function click() {
        $('.click').click(function () {
            var menu_item = $(this).attr("data-name")
            var item = $(this).attr("data-type");
            state[menu_item] = item;
            display(state['id']);
        })
    }

    function display(id) {
        var values = tables_data[id]["values"];
        var dependancy = tables_data[id]["dep"];

        for (var i = 0; i < dependancy.length; i++) {
            var item = get_current_selected_value(tables_data[id]["dep"][i]);
            values = values[item];
        }
        var top_source = values['top_url'];
        var bottom_source = values['bottom_url'];
        $('.main-top').attr('src', top_source);
        $('.main-bottom').attr('src', bottom_source);
    }

    function get_current_selected_value(category) {
        if (category == "id")
            return value = state['selected_menu'];
        else if (category == "idValue") {
            var item = state['selected_menu'];
            return value = state[item];
        }
        var value = state[category];
        if (value === undefined) {
            return get_first_value(category);
        }
        return value;
    }

    function get_first_value(category) {
        var values = tables_icons[category]['values'];
        for (i = 0; i < tables_icons[category]['dep'].length; i++) {
            var dependancy = tables_icons[category]['dep'][i];
            //dependancy = state[dependancy];
            if (state[dependancy] == undefined)
                dependancy = get_current_selected_value(dependancy);
            else
                dependancy = state[dependancy];
            values = values[dependancy];
        }
        return values[0]['id'];
    }


    $('.menu-click').click(function () {
        selected_menu = $(this).attr("data-type");
        state['id'] = $(this).attr("data-id");
        state['selected_menu'] = selected_menu;
        $('#display_bottom').empty();
        show(selected_menu);
        click();
    })


    function show(item) {
        var values = tables_icons[item]['values'];
        for (i = 0; i < tables_icons[item]['dep'].length; i++) {
            var dependancy = tables_icons[item]['dep'][i];
            if (state[dependancy] == undefined)
                dependancy = get_first_value(dependancy);
            else
                dependancy = state[dependancy];
            values = values[dependancy];
        }

        for (var i = 0; i < values.length; i++) {
            var menu_ele = $('#bottom').html();
            menu_ele = replace(menu_ele, "%SHAPE_NAME%", values[i]['id']);
            menu_ele = replace(menu_ele, "%IMAGE_NAME%", values[i]['url']);
            menu_ele = replace(menu_ele, "%SHAPE_NAME%", values[i]['id']);
            menu_ele = replace(menu_ele, "%CLASS_NAME%", item);
            $('#display_bottom').append($(menu_ele));
        }
    }
})


var tables_icons = {
    'shape': {
        'id': 'top',
        'dep': [],
        'values': [
            {
                'id': 'rectangle',
                'url': 'images/shapes/rectangle.png'
            },
            {
                'id': 'circle',
                'url': 'images/shapes/circle.png'
            },
            {
                'id': 'square',
                'url': 'images/shapes/square.png'
            }
        ]
    },
    'size': {
        'id': 'top',
        'dep': ['shape'],
        'values': {
            "rectangle": [
                {
                    'id': '3072',
                    'url': 'images/sizes/3072.png'
                },
                {
                    'id': '3060',
                    'url': 'images/sizes/3060.png'
                },
                {
                    'id': '3048',
                    'url': 'images/sizes/3048.png'
                },
                {
                    'id': '3354',
                    'url': 'images/sizes/3354.png'
                },
                {
                    'id': '3360',
                    'url': 'images/sizes/3360.png'
                },
                {
                    'id': '3372',
                    'url': 'images/sizes/3372.png'
                },
                {
                    'id': '3672',
                    'url': 'images/sizes/3672.png'
                },
                {
                    'id': '3678',
                    'url': 'images/sizes/3678.png'
                },
                {
                    'id': '3684',
                    'url': 'images/sizes/3684.png'
                },
                {
                    'id': '4284',
                    'url': 'images/sizes/4284.png'
                },
                {
                    'id': '4290',
                    'url': 'images/sizes/4290.png'
                },
            ],
            "circle": [
                {
                    'id': '36',
                    'url': 'images/sizes/circle/36.png'
                },
                {
                    'id': '42',
                    'url': 'images/sizes/circle/42.png'
                },
                {
                    'id': '48',
                    'url': 'images/sizes/circle/48.png'
                },
                {
                    'id': '54',
                    'url': 'images/sizes/circle/54.png'
                },
                {
                    'id': '60',
                    'url': 'images/sizes/circle/60.png'
                }
            ],

            'square': [
                {
                    'id': '3636',
                    'url': 'images/sizes/square/3636.png'
                },
                {
                    'id': '4242',
                    'url': 'images/sizes/square/4242.png'
                },
                {
                    'id': '4848',
                    'url': 'images/sizes/square/4848.png'
                }
            ]
        }
    },
    'leg': {
        'id': 'bottom',
        'dep': ['shape'],
        'values': {
            'rectangle': [
                {
                    'id': 'leg1',
                    'url': 'images/legDesign/leg1.png'
                },
                {
                    'id': 'leg2',
                    'url': 'images/legDesign/leg2.png'
                },
                {
                    'id': 'leg3',
                    'url': 'images/legDesign/leg3.png'
                },
                {
                    'id': 'leg4',
                    'url': 'images/legDesign/leg4.png'
                },
                {
                    'id': 'leg5',
                    'url': 'images/legDesign/leg5.png'
                },
                {
                    'id': 'leg6',
                    'url': 'images/legDesign/leg6.png'
                },
                {
                    'id': 'leg7',
                    'url': 'images/legDesign/leg7.png'
                },
                {
                    'id': 'leg8',
                    'url': 'images/legDesign/leg8.png'
                },
                {
                    'id': 'leg9',
                    'url': 'images/legDesign/leg9.png'
                },
                {
                    'id': 'leg10',
                    'url': 'images/legDesign/leg10.png'
                },
                {
                    'id': 'leg11',
                    'url': 'images/legDesign/leg11.png'
                },
                {
                    'id': 'leg12',
                    'url': ''
                },
                {
                    'id': 'leg13',
                    'url': ''
                },
                {
                    'id': 'leg14',
                    'url': ''
                },
                {
                    'id': 'leg15',
                    'url': ''
                },
                {
                    'id': 'leg16',
                    'url': ''
                }
            ],
            'square': [
                {
                    'id': 'leg1',
                    'url': 'images/legDesign/leg1.png'
                },
                {
                    'id': 'leg2',
                    'url': 'images/legDesign/leg2.png'
                },
                {
                    'id': 'leg3',
                    'url': 'images/legDesign/leg3.png'
                },
                {
                    'id': 'leg4',
                    'url': 'images/legDesign/leg4.png'
                },
                {
                    'id': 'leg5',
                    'url': 'images/legDesign/leg5.png'
                },
                {
                    'id': 'leg6',
                    'url': 'images/legDesign/leg6.png'
                },
                {
                    'id': 'leg7',
                    'url': 'images/legDesign/leg7.png'
                },
                {
                    'id': 'leg8',
                    'url': 'images/legDesign/leg8.png'
                },
                {
                    'id': 'leg9',
                    'url': 'images/legDesign/leg9.png'
                },
                {
                    'id': 'leg10',
                    'url': 'images/legDesign/leg10.png'
                },
                {
                    'id': 'leg11',
                    'url': 'images/legDesign/leg11.png'
                },
                {
                    'id': 'leg12',
                    'url': ''
                },
                {
                    'id': 'leg13',
                    'url': ''
                },
                {
                    'id': 'leg14',
                    'url': ''
                },
                {
                    'id': 'leg15',
                    'url': ''
                },
                {
                    'id': 'leg16',
                    'url': ''
                }
            ]
        }
    },

    'pedestal': {
        'id': 'bottom',
        'dep': ['shape'],
        'values': {
            "rectangle": [
                {
                    'id': 'pedestal1',
                    'url': 'images/pedestal/pedestal1.png'
                },
                {
                    'id': 'pedestal2',
                    'url': 'images/pedestal/pedestal2.png'
                },
                {
                    'id': 'pedestal3',
                    'url': 'images/pedestal/pedestal3.png'
                },
                {
                    'id': 'pedestal4',
                    'url': 'images/pedestal/pedestal4.png'
                }
            ],
            "circle": [
                {
                    'id': 'pedestal1',
                    'url': 'images/pedestal/circle/pedestal5.png'
                },
                {
                    'id': 'pedestal2',
                    'url': 'images/pedestal/circle/pedestal6.png'
                },
                {
                    'id': 'pedestal3',
                    'url': 'images/pedestal/circle/pedestal7.png'
                },
                {
                    'id': 'pedestal4',
                    'url': 'images/pedestal/circle/pedestal8.png'
                }
            ]
        }
    },
    'TopColor': {
        "id": "color",
        'dep': [],
        'values': [
            {
                'name': 'color',
                'id': 'walnut',
                'url': 'images/top%20color/natural1.png'
            },
            {
                'name': 'color',
                'id': 'mahagony',
                'url': 'images/top%20color/natural2.png'
            }
        ]
    },
    'LegColor': {
        "id": "color",
        'dep': [],
        'values': [
            {
                'name': 'color',
                'id': 'walnut',
                'url': 'images/top%20color/natural1.png'
            },
            {
                'name': 'color',
                'id': 'mahagony',
                'url': 'images/top%20color/natural2.png'
            }
        ]
    }
}


var tables_data = {
    "top": {
        "dep": ["shape", "size", "TopColor"],
        "values": {
            "rectangle": {
                "3048": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3048/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3048/leg1/sheesham/natural1.jpg"
                    }
                },
                "3060": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3060/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3060/leg1/sheesham/natural2.jpg"
                    }
                },
                "3072": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3072/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3072/leg1/sheesham/natural2.jpg"
                    }
                },
                "3354": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3354/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3354/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3354/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3354/leg1/sheesham/natural2.jpg"
                    }
                },
                "3360": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3360/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3360/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3360/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3360/leg1/sheesham/natural2.jpg"
                    }
                },
                "3372": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3372/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3372/leg1/sheesham/natural2.jpg"
                    }
                },
                "3672": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3672/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3672/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3672/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3672/leg1/sheesham/natural2.jpg"
                    }
                },
                "3678": {

                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3678/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3678/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "url": "images/tables_data/tops/rectangle/3678/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3678/leg1/sheesham/natural2.jpg"
                    }
                },
                "3684": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3684/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3684/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3684/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/3684/leg1/sheesham/natural2.jpg"
                    }
                },
                "4284": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/4284/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/4284/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/4284/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/4284/leg1/sheesham/natural2.jpg"
                    }
                },
                "4290": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/rectangle/4290/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/rectangle/4290/leg1/sheesham/natural2.jpg"
                    }
                }
            },

            "circle": {
                "36": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                        "bottom_url": "images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                        "bottom_url": "images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural2.jpg"
                    }
                },
                "42": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                        "bottom_url": "images/tables_data/pedestals/circle/42/pedestal1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                        "bottom_url": "images/tables_data/pedestals/circle/42/pedestal1/sheesham/natural2.jpg"
                    }
                },
                "48": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/48/top1/sheesham/40/natural1.png",
                        "bottom_url": "images/tables_data/pedestals/circle/48/pedestal1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/48/top1/sheesham/40/natural2.png",
                        "bottom_url": "images/tables_data/pedestals/circle/48/pedestal1/sheesham/natural2.jpg"
                    }
                },
                "54": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/54/top1/sheesham/40/natural1.png",
                        "bottom_url": "images/tables_data/pedestals/circle/54/pedestal1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/54/top1/sheesham/40/natural2.png",
                        "bottom_url": "images/tables_data/pedestals/circle/54/pedestal1/sheesham/natural2.jpg"
                    }
                },
                "60": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/60/top1/sheesham/40/natural1.png",
                        "bottom_url": "images/tables_data/pedestals/circle/60/pedestal1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/60/top1/sheesham/40/natural2.png",
                        "bottom_url": "images/tables_data/pedestals/circle/60/pedestal1/sheesham/natural2.jpg"
                    }
                }
            },
            "square": {
                "3636": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/square/3636/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/square/3636/leg1/sheesham/natural2.jpg"
                    }
                },
                "4242": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/square/4242/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/square/4242/leg1/sheesham/natural2.jpg"
                    }
                },
                "4848": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/4848/top1/sheesham/25/natural1.png",
                        "bottom_url": "images/tables_data/legs/square/4848/leg1/sheesham/natural1.jpg"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/4848/top1/sheesham/25/natural2.png",
                        "bottom_url": "images/tables_data/legs/square/4848/leg1/sheesham/natural2.jpg"
                    }
                }
            }
        }
    },

    "bottom": {
        "dep": ["shape", "id", "size", "idValue", "LegColor"],
        "values": {
            "rectangle": {
                "leg": {
                    "3048": {
                        "leg1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg1/sheesham/natural1.jpg"
                            }
                        },
                        "leg2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg2/sheesham/natural1.jpg"
                            }
                        },
                        "leg3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg3/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3048/leg3/sheesham/natural1.jpg"
                            }
                        }
                    },
                    "3060": {
                        "leg1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg1/sheesham/natural1.jpg"
                            }
                        },
                        "leg2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg2/sheesham/natural1.jpg"
                            }
                        },
                        "leg3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg3/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/rectangle/3060/leg3/sheesham/natural1.jpg"
                            }
                        }
                    },
                    "3072": {},
                    "3354": {},
                    "3360": {},
                    "3372": {},
                    "3672": {},
                    "3678": {},
                    "3684": {},
                    "4284": {},
                    "4290": {}
                },
                "pedestal": {
                    "3072": {
                        "pedestal1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal1/sheesham/natural2.jpg"
                            }
                        },
                        "pedestal2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal2/sheesham/natural2.jpg"
                            }
                        },
                        "pedestal3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal3/sheesham/natural1.png"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3072/pedestal3/sheesham/natural2.png"
                            }
                        }
                    },
                    "3372": {
                        "pedestal1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal1/sheesham/natural1.png"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal1/sheesham/natural2.png"
                            }
                        },
                        "pedestal2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal2/sheesham/natural1.png"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal2/sheesham/natural2.png"
                            }
                        },
                        "pedestal3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal3/sheesham/natural1.png"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal3/sheesham/natural2.png"
                            }
                        },
                        "pedestal4": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal4/sheesham/natural1.png"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/rectangle/3372/pedestal4/sheesham/natural2.png"
                            }
                        }
                    },
                    "3672": {},
                    "3678": {},
                    "3684": {},
                    "4284": {},
                    "4290": {}
                }
            },
            "circle": {
                "pedestal": {
                    "36": {
                        "pedestal1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/circle/36/pedestal1/sheesham/natural2.jpg"
                            },
                            "pedestal2": {
                                "walnut": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal2/sheesham/natural1.jpg"
                                },
                                "mahagony": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal2/sheesham/natural2.jpg"
                                }
                            },
                            "pedestal3": {
                                "walnut": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal3/sheesham/natural1.jpg"
                                },
                                "mahagony": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal3/sheesham/natural2.jpg"
                                }
                            },
                            "pedestal4": {
                                "walnut": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal4/sheesham/natural1.jpg"
                                },
                                "mahagony": {
                                    "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                                    "bottom_url": "images/tables_data/pedestals/circle/36/pedestal4/sheesham/natural2.jpg"
                                }
                            }
                        }
                    },
                    "42": {
                        "pedestal1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal1/sheesham/natural2.jpg"
                            }
                        },
                        "pedestal2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal2/sheesham/natural2.jpg"
                            }
                        },
                        "pedestal3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal3/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal3/sheesham/natural2.jpg"
                            }
                        },
                        "pedestal4": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal4/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                                "bottom_url": "images/tables_data/pedestals/circle/42/pedestal4/sheesham/natural2.jpg"
                            }
                        }
                    },
                }
            },
            "square": {
                "leg": {
                    "3636": {
                        "leg1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg1/sheesham/natural2.jpg"
                            }
                        },
                        "leg2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg2/sheesham/natural2.jpg"
                            }
                        },
                        "leg3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg3/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/3636/leg3/sheesham/natural2.jpg"
                            }
                        }
                    },
                    "4242": {
                        "leg1": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg1/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg1/sheesham/natural2.jpg"
                            }
                        },
                        "leg2": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg2/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg2/sheesham/natural2.jpg"
                            }
                        },
                        "leg3": {
                            "walnut": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural1.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg3/sheesham/natural1.jpg"
                            },
                            "mahagony": {
                                "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural2.png",
                                "bottom_url": "images/tables_data/legs/square/4242/leg3/sheesham/natural2.jpg"
                            }
                        }
                    }
                }
            }
        }
    },

    "color": {
        "dep": ["shape", "size", "TopColor"],
        "values": {
            "rectangle": {
                "3048": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3048/top1/sheesham/25/natural2.png"
                    }
                },
                "3060": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3060/top1/sheesham/25/natural2.png"
                    }
                },
                "3072": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3072/top1/sheesham/25/natural2.png"
                    }
                },
                "3354": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3354/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3354/top1/sheesham/25/natural2.png"
                    }
                },
                "3360": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3360/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3360/top1/sheesham/25/natural2.png"
                    }
                },
                "3372": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3372/top1/sheesham/25/natural2.png"
                    }
                },
                "3672": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3672/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3672/top1/sheesham/25/natural2.png"
                    }
                },
                "3678": {

                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3678/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "url": "images/tables_data/tops/rectangle/3678/top1/sheesham/25/natural2.png"
                    }
                },
                "3684": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/3684/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/3684/top1/sheesham/25/natural2.png"
                    }
                },
                "4284": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/4284/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/4284/top1/sheesham/25/natural2.png"
                    }
                },
                "4290": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural1.png"
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/rectangle/4290/top1/sheesham/25/natural2.png"
                    }
                }
            },

            "circle": {
                "36": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/36/top1/sheesham/40/natural2.png",
                    }
                },
                "42": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/42/top1/sheesham/40/natural2.png",
                    }
                },
                "48": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/48/top1/sheesham/40/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/48/top1/sheesham/40/natural2.png",
                    }
                },
                "54": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/54/top1/sheesham/40/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/54/top1/sheesham/40/natural2.png",
                    }
                },
                "60": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/circle/60/top1/sheesham/40/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/circle/60/top1/sheesham/40/natural2.png",
                    }
                }
            },
            "square": {
                "3636": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/3636/top1/sheesham/25/natural2.png",
                    }
                },
                "4242": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/4242/top1/sheesham/25/natural2.png",
                    }
                },
                "4848": {
                    "walnut": {
                        "top_url": "images/tables_data/tops/square/4848/top1/sheesham/25/natural1.png",
                    },
                    "mahagony": {
                        "top_url": "images/tables_data/tops/square/4848/top1/sheesham/25/natural2.png",
                    }
                }
            }
        }
    }
}


var chairs_icons = {
    'FrameStyle': {
        "id": "body",
        'dep': [],
        'values': [
            {
                'id': '0138',
                'url': 'images/chairs/bottom/0138.png'
            },
            {
                'id': '0229',
                'url': 'images/chairs/bottom/0229.png'
            },
            {
                'id': '1256',
                'url': 'images/chairs/bottom/1256.png'
            },
            {
                'id': '1259',
                'url': 'images/chairs/bottom/1259.png'
            },
            {
                'id': '5014',
                'url': 'images/chairs/bottom/5014.png'
            },
            {
                'id': '5031',
                'url': 'images/chairs/bottom/5031.png'
            },
            {
                'id': '5050',
                'url': 'images/chairs/bottom/5050.png'
            },
            {
                'id': 'miles',
                'url': 'images/chairs/bottom/miles.png'
            },
            {
                'id': 'sasha',
                'url': 'images/chairs/bottom/sasha.png'
            }
        ]
    },

    "FrameColor": {
        "id": "body",
        'dep': [],
        'values': [
            {
                'id': 'walnut',
                'url': 'images/top%20color/natural1.png'
            },
            {
                'id': 'mahagony',
                'url': 'images/top%20color/natural2.png'
            }
        ]
    },

    "Fabric": {
        "id": "seat",
        'dep': [],
        'values': [
            {
                'id': 'fabric1',
                'url': 'images/chairs/icons/fabric1.jpg'
            },
            {
                'id': 'fabric2',
                'url': 'images/chairs/icons/fabric2.jpg'
            },
            {
                'id': 'fabric3',
                'url': 'images/chairs/icons/fabric3.jpg'
            },
            {
                'id': 'fabric4',
                'url': 'images/chairs/icons/fabric4.jpg'
            },
            {
                'id': 'fabric5',
                'url': 'images/chairs/icons/fabric5.jpg'
            },
            {
                'id': 'fabric6',
                'url': 'images/chairs/icons/fabric6.jpg'
            },
            {
                'id': 'fabric7',
                'url': 'images/chairs/icons/fabric7.jpg'
            },
            {
                'id': 'fabric8',
                'url': 'images/chairs/icons/fabric8.jpg'
            },
            {
                'id': 'fabric9',
                'url': 'images/chairs/icons/fabric9.jpg'
            }
        ]
    }
}


var chairs_data = {
    "body": {
        "dep": ["FrameStyle", "FrameColor"],
        "values": {
            "0138": {
                "walnut": {
                    "top_url": "images/chairs/0138/seat/fabrics/fabric1.png",
                    "bottom_url": "images/chairs/0138/body/seesham/natural1.jpg"
                },
                "mahagony": {
                    "top_url": "images/chairs/0138/seat/fabrics/fabric1.png",
                    "bottom_url": "images/chairs/0138/body/seesham/natural2.jpg"
                }
            },
            "0229": {
                "walnut": {
                    "top_url": "images/chairs/0229/seat/fabrics/fabric1.png",
                    "bottom_url": "images/chairs/0229/body/seesham/natural1.jpg"
                },
                "mahagony": {
                    "top_url": "images/chairs/0229/seat/fabrics/fabric1.png",
                    "bottom_url": "images/chairs/0229/body/seesham/natural2.jpg"
                }
            }
        }
    },

    "seat": {
        "dep": ["FrameStyle", "Fabric"],
        "values": {
            "0138": {
                "fabric1": {
                    "top_url": "images/chairs/0138/seat/fabrics/fabric1.png",
                    "bottom_url": "images/chairs/0138/body/seesham/natural1.jpg"
                },
                "fabric2": {
                    "top_url": "images/chairs/0138/seat/fabrics/fabric2.png",
                    "bottom_url": "images/chairs/0138/body/seesham/natural1.jpg"
                },
                "fabric3": {
                    "top_url": "images/chairs/0138/seat/fabrics/fabric3.png",
                    "bottom_url": "images/chairs/0138/body/seesham/natural1.jpg"
                }
            }
        }
    }
}






