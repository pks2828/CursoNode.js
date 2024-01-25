function calcularFactorial(numero) {
    return new Promise((resolve, reject) => {
        if (numero <= 0) {
            reject('El número debe ser positivo');
        }

        let resultado = 1;

        console.log(`Factorial de ${numero}:`);

        const calcular = (i) => {
            if (i > numero) {
                resolve(resultado);
                return;
            }

            resultado *= i;
            console.log(`${numero} x ${i}! = ${resultado}`);

            // Simulando un proceso asíncrono (puedes omitir esto si no es necesario)
            setTimeout(() => {
                calcular(i + 1);
            }, 1000);
        };

        calcular(1);
    });
}

calcularFactorial(9)
    .then((resultado) => {
        console.log(`El resultado final es: ${resultado}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });
