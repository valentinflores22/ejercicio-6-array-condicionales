
let entrada = prompt("Ingresa una lista de palabras separadas por comas:");

let palabras = entrada.split(',');

let palindromas = [];

for (let i = 0; i < palabras.length; i++) {

    let palabra = palabras[i].trim(); 

    if (palabra === palabra.split('').reverse().join('')) {
        palindromas.push(palabra);
    }
}

if (palindromas.length > 0) {

    alert("Las palabras palíndromas son: " + palindromas.join(', '));

} else {
    alert("No se encontraron palabras palíndromas.");
}