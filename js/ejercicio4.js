
const palabra = prompt("Ingresa una palabra:").toLowerCase();

let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {

const letra = palabra[i];

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadorVocales++;
}

}

alert(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);
