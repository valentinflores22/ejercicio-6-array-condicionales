
let acumulado = 0;

while (acumulado < 100) {
const numero = parseInt(prompt("Ingresa un número entero:"));

if (!isNaN(numero)) { 

    acumulado += numero;
    console.log(`Número ingresado: ${numero} | Total acumulado: ${acumulado}`);

} else {
    alert("Por favor, ingresa un número válido.");
}
}

alert(`El total acumulado es: ${acumulado}`);
