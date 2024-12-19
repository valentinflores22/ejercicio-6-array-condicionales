
const filas = parseInt(prompt("Ingresa el número de filas para el triángulo invertido:"));

if (filas > 0) {

for (let i = filas; i > 0; i--) {

    let linea = '';

    for (let j = 0; j < i; j++) {

    linea += '*';

    }
    console.log(linea);
}

} else {

alert("Por favor, ingresa un número de filas válido (mayor a 0).");

}
