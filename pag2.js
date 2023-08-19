let palabrasInput = document.getElementById("palabras");
let caracterInput = document.getElementById("caracter");
let resultadoText = document.getElementById("resultado");
let form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let palabras = palabrasInput.value.split(',');
    const caracter = caracterInput.value;

    let coincidencias = palabras.filter(x => x.includes(caracter));


    resultadoText.value = 'Coincidencias: ' + coincidencias;
});



