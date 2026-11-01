const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Ingresa un número: "));

if (!isNaN(numero) && numero > 0) {
    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i + " ";
        }
        console.log(linea.trim());
    }
} else {
    console.log("Introduce un número entero válido mayor que 0.");
}
