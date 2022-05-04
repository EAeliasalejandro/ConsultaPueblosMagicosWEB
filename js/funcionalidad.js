
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
            var lat = parseFloat(direccion[0]);
            var lng = parseFloat(direccion[1]);
            console.log(lat +" "+lng);

            var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(lat, lng),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: map,
                title: document.getElementById('entrada2').value
            });

        })
}