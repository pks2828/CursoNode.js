function calcularFactorial(numero) {
    if (numero <= 0) {
        throw new Error('El número debe ser positivo');
    }

    let resultado = 1;

    console.log(`Factorial de ${numero}:`);
    
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
        console.log(`${numero} x ${i}! = ${resultado}`);
    }

    return resultado;
}

calcularFactorial(6); // Cambia el número según tus necesidades
