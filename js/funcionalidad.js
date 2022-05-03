function muestraMensaje() {
    fetch('https://apirestpueblosmagicos-348922.uc.r.appspot.com/pueblosMagicos/obtenerPueblos/' + document.getElementById('entrada1').value)
        .then((respuesta) => {
            return respuesta.json();
        }).then((respuesta) => {
            let pueblosMagicos = respuesta;
            let cadena = "";
            console.log(respuesta);
            if (pueblosMagicos instanceof Array) {
                for (i = 0; i < pueblosMagicos.length; i++) {
                    cadena += pueblosMagicos[i] + "\n";
                }
                document.getElementById('resultado1').value = cadena;
            } /*else if (respuesta instanceof Object) {
                cadena += String(respuesta);
                document.getElementById('resultado1').value = cadena;
                
                console.log(typeof cadena);
            }*/




        })
}