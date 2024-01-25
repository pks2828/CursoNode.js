function tablaMultiplicar(numBase, numLimit){
    
    for(let i = 1; i <= numLimit; i++){
        resultado = numBase*i;
        console.log(`${numBase}x${i} = ${resultado}`);



    }

    return resultado;

    
}

tablaMultiplicar(1,10)