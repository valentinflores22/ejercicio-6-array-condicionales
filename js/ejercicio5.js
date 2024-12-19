
const numeros = [23, 45, 12, 67, 34, 89, 21];
let numeroMayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
}

}

console.log(`El número más grande es: ${numeroMayor}`);
