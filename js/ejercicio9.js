
const numero = parseInt(prompt("Ingresa un número entero positivo:"));

if (!isNaN(numero) && numero > 0) {

let numeroInvertido = 0;
let numeroTemporal = numero;

while (numeroTemporal > 0) {
    
    const ultimoDigito = numeroTemporal % 10; 
    numeroInvertido = numeroInvertido * 10 + ultimoDigito; 
    numeroTemporal = Math.floor(numeroTemporal / 10); 
}

alert(`El número invertido es: ${numeroInvertido}`);
} else {
alert("Por favor, ingresa un número entero positivo válido.");
}
