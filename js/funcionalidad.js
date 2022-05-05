
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
            // Eliminando todos los hijos de un elemento
            var element = document.getElementById("error");
            var element2 = document.getElementById("map");

            var aliniamientos = document.getElementById("aliniamientos");
            var imagenBorrarExiste = !!document.querySelector("#imagenBorrar");
            var imagenBorrar = document.querySelector("#imagenBorrar");
            if (imagenBorrarExiste == true) {
                aliniamientos.removeChild(imagenBorrar);
                element2.style.display = "block"; // Mostrar
                element2.style = "width:400px;height:400px;"; // tamaño
            }


            while (element2.firstChild) {
                element2.removeChild(element2.firstChild);
            }
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            if (respuesta[0] == 'Selecciona el Pueblo Mágico' || respuesta[0] == 'No se encontró el pueblo mágico solicitado') {
                var contenedor = document.createElement("div"); //div
                contenedor.className = "form-floating"; //mapa class:form-floating nombre:contenedor
                contenedor.id = "contenedor";
                var txta = document.createElement("textarea");
                txta.id = "mensajeError";
                txta.className = "form-control";
                txta.style = "height: 50px";
                txta.readOnly = true;
                txta.innerHTML = respuesta[0];
                document.getElementById("error").appendChild(contenedor);
                contenedor.appendChild(txta);
            } else {
                timeout = setTimeout(generarMapa(respuesta), 3000);
            }/*
            */
        })
}
function generarMapa(respuesta) {
    let direccion = respuesta[0].split(",");
    var lat = parseFloat(direccion[0]);
    var lng = parseFloat(direccion[1]);
    //var mapa = document.getElementById('map');

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
}