var template = document.getElementById("index").
                innerHTML;
            console.log(template);
var compilar = Handlebars.compile(template); 

            var cuadrosPortafolio = {
                caracteristicas : [
                    {
                        imagen: "<img src='../assets/images/portfolio/1.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/2.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                       imagen: "<img src='../assets/images/portfolio/3.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/4.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/5.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/6.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/7.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/8.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/9.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/10.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/11.jpg'>",
                        titulo: "Sailing Vivamus"
                    },
                    {
                        imagen: "<img src='../assets/images/portfolio/12.jpg'>",
                        titulo: "Sailing Vivamus"
                    }
                ]
            }
            
            
           var compiladoHTML = compilar(cuadrosPortafolio);
            document.getElementById("action").innerHTML += compiladoHTML;
            
            

