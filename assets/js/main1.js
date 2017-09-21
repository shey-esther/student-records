const app = {
    item : {
        arrayDatos : [],
    },

    init : function () {
        app.setup();
    },

    productos : function (nombre, porcentaje, hse) {
        this.nombre = nombre,
        this.porcentaje = porcentaje,
        this.hse = hse
      },

    setup : function () {
        $('#students').click(app.agregar);
        
        $('#imprimir').click(() => app.imprimir(app.item.arrayDatos));
    },

    agregar :  function () {
        var nombre = prompt("Dime tu Nombre");
        var porcentaje = prompt("Punto Tecnico");
        var hse = prompt("Puntos de vida");
        var nuevoDato = new app.productos(nombre, porcentaje, hse);//pusheamos los resultados al array vacio.
        app.item.arrayDatos.push(nuevoDato);
        for (var i = 0; i < app.item.arrayDatos.length; i++) {
          $('#mostrar').empty();
          $('#mostrar').append(
            `<h5>Nombre :${app.item.arrayDatos[i].nombre}</h5>\
              <h5>Puntaje Tecnico :${app.item.arrayDatos[i].porcentaje}</h5>\
              <h5>HSE :${app.item.arrayDatos[i].hse}</h5>\
              <hr>
          `);
        } 
    },

    imprimir : function (array) {
        array.map(x => {
          // $('#mostrar').empty();
          $('#mostrar').append(
            `<h5>Nombre :${x.nombre}</h5>\
               <h5>Puntaje Tecnico :${x.porcentaje}</h5>\
               <h5>HSE :${x.hse}</h5>\
               <hr>
            `);
        });
    } 
}
$(document).ready(app.init);

// console.log(app.item.arrayDatos);