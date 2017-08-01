var template = Handlebars.templates["index"]; 
            var compilar = Handlebars.compile(template);
    
            var cuadrosAboutUsChicos = {
                caracteristicas : [
                    {
                        imagen: "<img src='..assets/images/home/icon1.png'>",
                        titulo: "Incredibly Responsive",
                        resumen: "Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef sirloin chicken ground round."
                    },
                    {
                        imagen: "<img src='..assets/images/home/icon2.png'>",
                        titulo: "Superior Typography",
                        resumen: "Hamburger ribeye drumstick turkey, strip steak sausage ground round shank pastrami beef brisket pancetta venison."
                    },
                    {
                       imagen: "<img src='..assets/images/home/icon3.png'>",
                        titulo: "Swift Page Builder",
                        resumen: "Venison tongue, salami corned beef ball tip meatloaf bacon. Fatback pork belly bresaola tenderloin bone pork kevin shankle." 
                    }
                ]
            }
            
            
            document.getElementById("action").innerHTML += template(data);
            
            

