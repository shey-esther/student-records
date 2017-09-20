// aqui el codigo js
var arrayDatos = [];//retorna los datos que son ingresados.
console.log(arrayDatos);


$('#students').click(function () {//al hacer click obtenemos datos con el prompt
  var nombre = prompt("Dime tu Nombre");
  var porcentaje = prompt("Punto Tecnico");
  var hse = prompt("Puntos de vida");
  var productos = [//variable objeto literal.
    {
      nombre : nombre,
      porcentaje : porcentaje,
      hse : hse
    },
  ];
  for (var i = 0; i < productos.length; i++) {
      arrayDatos.push(productos[i]);//pusheamos los resultados al array vacio.
  }
});

$('#imprimir').click( function (){
    arrayDatos.map(function(x) {
      $('#mostrar').append(
        `<h5>Nombre :${x.nombre}</h5>\
         <h5>% Tecnico :${x.porcentaje}</h5>\
         <h5>HSE :${x.hse}</h5>\
         <hr>
      `);
   });
});









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

