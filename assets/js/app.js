var template = document.getElementById("index").
                innerHTML;
            console.log(template);
            var compilar = Handlebars.compile(template);
            
            /*var paquetes = {
                /*caracteristicas : [
                    {
                        nombre: "Basic",
                        precio: "$9.00 <p>per month</p>",
                        entrar: "Sign Up",
                        espacio: "<strong>100MB </strong>Disk Space",
                        traffic: "<strong>200MB </strong>Monthly Traffic",
                        subdominios: "<strong>2 </strong>Subdomains",
                        cuentas: "<strong>5 </strong>Email Accounts",
                        soporte: "Webmail Support",
                        sql: "MySQL Support",
                        php: "<p style = 'color:white'</p>n/a",
                        panel: "<p style = 'color:white'</p>n/a",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        nombre: "Corporate",
                        precio: "$14.00 <p>per month</p>",
                        entrar: "Sign Up",
                        espacio: "<strong>300MB </strong>Disk Space",
                        traffic: "<strong>400MB </strong>Monthly Traffic",
                        subdominios: "<strong>5 </strong>Subdomains",
                        cuentas: "<strong>10 </strong>Email Accounts",
                        soporte: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "<p style = 'color:white'</p>n/a",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        nombre: "Business",
                        precio: "$29.00 <p>per month</p>",
                        entrar: "Sign Up",
                        espacio: "<strong>1GB </strong>Disk Space",
                        traffic: "<strong>1GB </strong>Monthly Traffic",
                        subdominios: "<strong>10 </strong>Subdomains",
                        cuentas: "<strong>25 </strong>Email Accounts",
                        soporte: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "Plesk Control Panel",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        nombre: "Platinum",
                        precio: "$59.00 <p>per month</p>",
                        entrar: "Sign Up",
                        espacio: "<strong>5GB </strong>Disk Space",
                        traffic: "<strong>Unlimited </strong>Monthly Traffic",
                        subdominios: "<strong>Unlimited </strong>Subdomains",
                        cuentas: "<strong>10 </strong>Email Accounts",
                        soporte: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "Plesk Control Panel",
                        spam: "Spam Assassin"
                    }
                ]
            }*/
            
            var compiladoHTML = compilar({name:"<em>Mimi</em>"});
            document.getElementById("action").innerHTML += compiladoHTML;