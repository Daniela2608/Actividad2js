const n = 5;
for (let i = 1; i <= n; i++) {
    let linea = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(linea);
}
for (let i = n - 1; i >= 1; i--) {
    let linea = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(linea);
}


