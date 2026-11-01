const altura = 5;
for (let i = 1; i <= altura; i++) {
    let linea = " ".repeat(altura - i);
    for (let j = 1; j <= i; j++) {
        linea += j;
    }
    for (let j = i - 1; j >= 1; j--) {
        linea += j;
    }
    console.log(linea);
}


