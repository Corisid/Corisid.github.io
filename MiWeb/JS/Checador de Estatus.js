
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Le enviaremos un reporte a su correo electronico sobre el estado de su servicio y una fecha estimada para recogerlo.');
            this.reset();
        });
