// aqui el codigo js
var arrayDatos = [];//retorna los datos que son ingresados.
// console.log(arrayDatos);

function productos(nombre, porcentaje, hse) {
  this.nombre = nombre,
    this.porcentaje = porcentaje,
    this.hse = hse
};

$('#students').click(function () {//al hacer click obtenemos datos con el prompt
  var nombre = prompt("Dime tu Nombre");
  var porcentaje = prompt("Punto Tecnico");
  var hse = prompt("Puntos de vida");
  var nuevoDato = new productos(nombre, porcentaje, hse);//pusheamos los resultados al array vacio.
  arrayDatos.push(nuevoDato);
  for (var i = 0; i < arrayDatos.length; i++) {
    $('#mostrar').empty();
    $('#mostrar').append(
      `<h5>Nombre :${arrayDatos[i].nombre}</h5>\
        <h5>Puntaje Tecnico :${arrayDatos[i].porcentaje}</h5>\
        <h5>HSE :${arrayDatos[i].hse}</h5>\
        <hr>
    `);
  }
});

//funcion que me muestra el arrayDatos con posiciones recorridas con metodo 'map'.
$('#imprimir').click(() => imprimir(arrayDatos));
function imprimir(array) {
  array.map(function (x) {
    // $('#mostrar').empty();
    $('#mostrar').append(
      `<h5>Nombre :${x.nombre}</h5>\
         <h5>Puntaje Tecnico :${x.porcentaje}</h5>\
         <h5>HSE :${x.hse}</h5>\
         <hr>
      `);
  });
}

// funcion que inprimira los porcentajes mayores del 70 %.
$('#porcentAltos').click(function () {
  $('#mostrar').empty();
  var resslt = arrayDatos.filter(function (menores) {
    return menores.porcentaje > 70;
  });
  imprimir(resslt);
  console.log(resslt);
});

// funcion que imprimira los porcentajes menores del 70%.
$('#porcentBajos').click(function () {
  $('#mostrar').empty();
  var resslt = arrayDatos.filter(function (menores) {
    return menores.porcentaje <= 70;
  });
  imprimir(resslt);
  console.log(resslt);
});





