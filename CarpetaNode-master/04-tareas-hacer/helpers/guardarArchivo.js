const fs = require('fs');
const archivo = './db/data.json'; //Como en dos funciones ocuparemos el mismo dato, se pone la variable de manera global


const guardarDB = ( data ) =>{//Lectura
        
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {//Escritura

    if ( !fs.existsSync(archivo) ){ //SI NO EXISTE 
        return null; //Regresamos null
    }
    // lo ponemos al ultimo el si existe ya que daria error si se hiciera de manera inversa
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});//Si existe
    const data = JSON.parse(info);//Hacemos que el json devuelva OBJETO y no STRINGS
    // console.log(data);

    return data;
    
}


module.exports = {
    guardarDB,
    leerDB
}

