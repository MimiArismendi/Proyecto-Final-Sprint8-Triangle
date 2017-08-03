var template = document.getElementById("index").
                innerHTML;
            console.log(template);
var compilar = Handlebars.compile(template); 

            var cuadrosPortafolio = {
                caracteristicas : [
                    {
                        imagen: "<img src='../assets/images/portfolio/1.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/2.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                       imagen: "<img src='../assets/images/portfolio/3.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/4.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/5.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/6.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/7.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/8.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/9.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/10.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/11.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/12.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/13.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/14.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/15.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/16.jpg'class='responsive-img'>",
                        titulo: "Sailing Vivamus"
                    }
                ]
            }
            
            
           var compiladoHTML = compilar(cuadrosPortafolio);
            document.getElementById("action").innerHTML += compiladoHTML;
         

         
            

