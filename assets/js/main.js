// aqui el codigo js
var arrayDatos = [];//retorna los datos que son ingresados.
console.log(arrayDatos);

function productos (nombre,porcentaje,hse){
  this.nombre=nombre,
  this.porcentaje=porcentaje,
  this.hse=hse
  };

$('#students').click(function () {//al hacer click obtenemos datos con el prompt
  var nombre = prompt("Dime tu Nombre");
  var porcentaje = prompt("Punto Tecnico");
  var hse = prompt("Puntos de vida");
  var nuevoDato = new productos (nombre,porcentaje,hse);//pusheamos los resultados al array vacio.
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


$('#imprimir').click(()=>imprimir(arrayDatos));
function imprimir (array){
    array.map(function(x) {
      // $('#mostrar').empty();
      $('#mostrar').append(
        `<h5>Nombre :${x.nombre}</h5>\
         <h5>% Tecnico :${x.porcentaje}</h5>\
         <h5>HSE :${x.hse}</h5>\
         <hr>
      `);
   });
}


$('#porcentBajos').click( function (){
  $('#mostrar').empty();
  var resslt = arrayDatos.filter(function (menores) {
  return menores.porcentaje > 70;
  });
  imprimir(resslt);
  console.log(resslt);
});



$('#btn_update').click(function(){
  $("#data1").empty();
  var update=arr_students.filter(function (c) {
  return c.TechPoints >70
});
Print(update);
console.log(update);
});



// $('#porcentBajos').click( function (){
//   var resslt = arrayDatos.filter(function (menores) {
//    return menores.porcentaje >= 80;
//    });
//    console.log(resslt);
//  });








// var productos = [
//   {
//     nombre : 'pijama',
//     tipo : 'ropa'
//   },
// ];

// var computadores = [];
// for (var i = 0; i < productos.length; i++) {
//   if (productos[i].tipo === 'computador') {
//     computadores.push(productos[i]);
//   }
// }
// var computadores = productos.filter(function (producto) {
//   return productos.tipo === 'computador'
// });

