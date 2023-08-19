// $(document).ready(function () {
//     var personas = [
//       { nombre: "John", apellido: "Doe" },
//       { nombre: "Jane", apellido: "Smith" }
//       // Agrega más objetos de persona según sea necesario
//     ];

//     // Función para actualizar la tabla con los resultados de búsqueda
//     function actualizarTabla(resultados) {
//       var tablaCuerpo = $("#tabla-cuerpo");
//       tablaCuerpo.empty();
//       resultados.forEach(function (persona) {
//         tablaCuerpo.append("<tr><td>" + persona.nombre + "</td><td>" + persona.apellido + "</td></tr>");
//       });
//     }

//     // Función para buscar personas y actualizar la tabla
//     function buscarPersonas(nombre, apellido) {
//       var resultados = personas.filter(function (persona) {
//         return persona.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
//           persona.apellido.toLowerCase().includes(apellido.toLowerCase());
//       });
//       actualizarTabla(resultados);
//     }

//     // Manejo del envío del formulario
//     $("form").submit(function (event) {
//       event.preventDefault();
//       var nombre = $("#nombre").val();
//       var apellido = $("#apellido").val();
//       buscarPersonas(nombre, apellido);
//     });

//     // Manejo del campo de búsqueda
//     $("#buscador").on("input", function () {
//       var busqueda = $(this).val();
//       var resultados = personas.filter(function (persona) {
//         return persona.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
//           persona.apellido.toLowerCase().includes(busqueda.toLowerCase());
//       });
//       actualizarTabla(resultados);
//     });
//   });

class Person {
    name = "";
    lastName = "";

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

let nombreInput = document.getElementById("nombre");
let apellidoInput = document.getElementById("apellido");
let buscadorInput = document.getElementById("buscador");
let btnBuscador = document.getElementById("btn-search");
let form = document.getElementById("formulario");
let tableBody = document.getElementById("table-body");


let personas = [];
let resultados = [];


form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = nombreInput.value;
    const lastName = apellidoInput.value;

    personas.unshift(new Person(name, lastName));
    buscadorInput.value = "";
    actualizarTabla(personas);

});


btnBuscador.addEventListener("click", function(event) {
    event.preventDefault();

    const param = buscadorInput.value;

    param.length > 0? 
        resultados = personas.filter( x => x.name.includes(param) || x.lastName.includes(param)) :
        resultados = [...personas];


    actualizarTabla(resultados);
})


function actualizarTabla(resultados) {
      tableBody.innerHTML = "";
      resultados.forEach(function (person) {
        // tableBody.append("<tr><td>" + persona.name + "</td><td>" + persona.lastName + "</td></tr>");

        let rowRef = tableBody.insertRow(-1);
        let cellRef = rowRef.insertCell(0);
        cellRef.textContent = person.name;

        cellRef = rowRef.insertCell(1);
        cellRef.textContent = person.lastName;
      });
    }