//Funcion para clasificar numeros par e impar
//impresion en un array


function clasificacionNumeros(numeros){ //definimos nuestra funcion y el argumento de la funcion
    let pares = [];//Definimos la variable par como un arreglo
    let impares = [];//Definimos la varibale impar como un arreglo

    for(let i = 0; i < numeros.length; i++){//Recorremos la lista del array en base la extension del array
        if (numeros[i] % 2 === 0){//SI numeros iterar su residuo es igual a 0
            pares.push(numeros[i]);//Metemos los pares en el array PARES con nuestro argumento numeros que su valor de arreglo es la iteracion
        }else{
            impares.push(numeros[i]);//Metemos los impares en un array si no cumple la condicion
        }
    }
    return {//Devuelve un valor desde la funcion Clasificacion numeros
        pares: pares, impares: impares//Devuelve objeto que contiene 2 arrays
    };    
}

const numerosEjem = [1, 2, 3, 4, 5, 6, 7, 8, 9];//Asignamos el valor del array a evaluar
const resultado = clasificacionNumeros(numerosEjem);//asignamos la variable resultado AL RESULTADO DE LA FUNCION con nuestro argumento

console.log(resultado);