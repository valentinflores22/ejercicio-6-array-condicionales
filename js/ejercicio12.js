
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let adivinanza = 0;

while (adivinanza !== numeroAleatorio) {
    
    adivinanza = parseInt(prompt("Adivina el número entre 1 y 10:"));

    if (adivinanza < numeroAleatorio) {
        alert("El número es mayor. Intenta nuevamente.");

    } else if (adivinanza > numeroAleatorio) {
        alert("El número es menor. Intenta nuevamente.");

    } else {
        alert("¡Felicidades! Adivinaste el número.");
    }
}
