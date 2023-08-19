let palabrasInput = document.getElementById("palabras");
let longitudInput = document.getElementById("longitud");
let resultadoText = document.getElementById("resultado");
let form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let palabras = palabrasInput.value.split(',').map(x => x.trim());
    const longitud = parseInt(longitudInput.value);
    console.log(longitud);
    console.log(palabras);

    let coincidencia = palabras.find(x => x.length === longitud);
    

    coincidencia == undefined? 
        resultadoText.value = 'No se encontro coincidencia para longitud ' + longitud : 
        resultadoText.value = 'Coincidencia: ' + coincidencia;
});



