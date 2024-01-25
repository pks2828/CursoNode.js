// setTimeout( () => {
//     console.log("Hola Mundo");
// } ,1000);

const getUsuarioById = (id, ejemploCallback) => {
    
    const usuario = { //Ejemplo esta funcion vendria de la base de datos
        id,
        nombre: "Fernando"
    }

    setTimeout( () => { //se manda aca, por eso el mismo argumento
        ejemploCallback(usuario)
    },1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);

});

//CALLBACK: FUNCION QUE SE MANDA COMO ARGUMENTO A OTRA FUNCION