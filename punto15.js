const prompt = require('prompt-sync')();
let tamano = parseInt(prompt("Ingresa el tamaño del rombo: "));

if (!isNaN(tamano) && tamano > 0) {
    

    let totalFilas = (2 * tamano) - 1; 
    for (let filaActual = 1; filaActual <= totalFilas; filaActual++) {
        let distanciaAlCentro = Math.abs(tamano - filaActual);
        let cantidadEspacios = distanciaAlCentro;
        let cantidadAsteriscos = 2 * (tamano - distanciaAlCentro) - 1;
        let espacios = " ".repeat(cantidadEspacios);
        let asteriscos = "*".repeat(cantidadAsteriscos);
        console.log(espacios + asteriscos);
    }
    
} else {
    console.log("introduce un número entero válido mayor que 0.");
}
