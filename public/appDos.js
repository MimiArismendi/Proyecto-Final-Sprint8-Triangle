var template2 = document.getElementById("index2").
                innerHTML;
            console.log(template2);
var compilar = Handlebars.compile(template2); 

            var imagenesShortcodes = {
                descripcion : [
                    {
                        imagen: "<img src='../assets/images/shortcodes/basic.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/buyb.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/silver.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/buyr.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/gold.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/buyy.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/platinum.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/buyg.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/basic2.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/signb.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/silver2.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/signr.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/gold2.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/signy.png'class='responsive-img'>"
                    },
                    {
                        imagen: "<img src='../assets/images/shortcodes/platinum2.png'class='responsive-img'>",
                        text1: "Lorem ipsum dolor <i class='right fa fa-check' aria-hidden='true'></i>",
                        text2:"Consectetur adipiscing <i class='right fa fa-times' aria-hidden='true'></i>",
                        text3:"Nulla pallentesque <i class='right fa fa-times' aria-hidden='true'></i>",
                        text4:"Integer quis risus <i class='right fa fa-check' aria-hidden='true'></i>",
                        text5:"Phasellus et metus <i class='right fa fa-times' aria-hidden='true'></i>",
                        text6:"Duis nec massa inter <i class='right fa fa-check' aria-hidden='true'></i>",
                        imagen2:"<img src='../assets/images/shortcodes/signg.png'class='responsive-img'>"
                    }
                ]
            }
            
            
           var compiladoHTML = compilar(imagenesShortcodes);
            document.getElementById("action2").innerHTML += compiladoHTML;