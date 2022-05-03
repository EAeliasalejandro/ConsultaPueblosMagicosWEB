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

function obtenerDireccion() {
    fetch('https://apirestpueblosmagicos-348922.uc.r.appspot.com/pueblosMagicos/obtenerDireccion/' + document.getElementById('entrada2').value)
        .then((respuesta) => {
            return respuesta.json();
        }).then((respuesta) => {
            let direccion = respuesta[0].split(",");
            initMap(direccion);

        })
}

function initMap(direccion) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(direccion[0]), lng: parseFloat(direccion[1]) },
        zoom: 13
    });
    var marker = new google.maps.Marker({
        position: { lat: parseFloat(direccion[0]), lng: parseFloat(direccion[1]) },
        map: map,
        title: document.getElementById('entrada2').value
    });
}