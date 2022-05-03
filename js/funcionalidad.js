function obtenerPueblosMagicos() {
    fetch('https://apirestpueblosmagicos-348922.uc.r.appspot.com/pueblosMagicos/obtenerPueblos/' + document.getElementById('entrada1').value)
        .then((respuesta) => {
            return respuesta.json();
        }).then((respuesta) => {
            let pueblosMagicos = respuesta;
            let cadena = "";

            for (i = 0; i < pueblosMagicos.length; i++) {
                cadena += pueblosMagicos[i] + "\n";
            }
            document.getElementById('resultado1').value = cadena;
        })
}