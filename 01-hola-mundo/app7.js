// Función que simula una tarea asíncrona
const tareaAsincrona = (mensaje, tiempo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(mensaje);
            resolve();
        }, tiempo);
    });
};

// Función para obtener el doble de un número de forma asíncrona con callbacks
const obtenerDobleConCallback = (numero, callback) => {
    console.log(`Obteniendo el doble de ${numero}:`);

    // Simulando una tarea asíncrona
    tareaAsincrona('Simulando tarea asíncrona...', 1000)
        .then(() => {
            const resultado = numero * 2;
            console.log(`El doble de ${numero} es: ${resultado}`);
            callback(null, resultado);
        });
};

// Función para obtener el doble de un número de forma asíncrona con promesas
const obtenerDobleConPromesa = (numero) => {
    return new Promise((resolve, reject) => {
        console.log(`Obteniendo el doble de ${numero}:`);

        // Simulando una tarea asíncrona
        tareaAsincrona('Simulando tarea asíncrona...', 1000)
            .then(() => {
                const resultado = numero * 2;
                console.log(`El doble de ${numero} es: ${resultado}`);
                resolve(resultado);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

// Llamadas a las funciones
obtenerDobleConCallback(5, (error, resultado) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else {
        console.log(`Resultado final: ${resultado}`);
    }
});

obtenerDobleConPromesa(5)
    .then((resultado) => {
        console.log(`Resultado final: ${resultado}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });
