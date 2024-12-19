
const numero = parseInt(prompt("Ingresa un número del 1 al 100:"));

if (numero >= 1 && numero <= 100) {

for (let i = 1; i <= 1000; i++) {
    const resultado = numero * i;
    if (resultado > 1000) {
    break;
    }
    console.log(`${numero} x ${i} = ${resultado}`);
}

} else {

alert("Por favor, ingresa un número válido entre 1 y 100.");

}