let paresInput = document.getElementById("pares");
let imparesInput = document.getElementById("impares");
let resultadoText = document.getElementById("resultado");
let form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();
    try {
        let pares = paresInput.value.split(',').map(x => parseInt(x)).sort((a,b) => a-b);
        let impares = imparesInput.value.split(',').map(x => parseInt(x)).sort((a,b) => a-b);

        if(pares.every(x => isEven(x)) && impares.every(x => isOdd(x))){
            let numbers = pares.concat(impares).sort((a,b) => a-b);
            console.log(numbers);

            resultadoText.value = 'Pares: ' + pares + '\nImpares: ' + impares + '\n\nArreglo ordenado: ' + numbers;
        }

        
    } catch (error) {
        
    }
    
});


//check if the number is even
function isEven (number) {
    return number % 2 === 0;
  }
  
  //check if the number is odd
  function isOdd (number) {
    return number % 2 !== 0;
  }