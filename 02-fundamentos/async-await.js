const empleados = [
    {
        id:1,
        nombre: "fernando"
    },
    {
        id:2,
        nombre:"Linda"
    },
    {
        id:3,
        nombre: "Karen"
    }

];
const salarios = [
    {
        id:1,
        salario : 1000
    },
    {
        id:2,
        salario:1500
    },
];

const getEmpleado = ( id ) => {  // CREACION DE FUNCION OBTENER EMPLEADO
    
    return new Promise( (resolve, reject) =>{

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) ? resolve( empleado ) : reject(`No existe el empleado con id ${id}`);
        //condición ? expresiónSiVerdadero : expresiónSiFalso;
    });
}  

const getSalario = ( id ) => {
    return new Promise((resolve,reject)=>{
    const salario = salarios.find(s => s.id === id )?.salario;
    (salario)
        ?resolve(salario)
        :reject(`No existe salario asociado al id ${id}`);
    });

}

const GetInfoUsuario = async() => {//cuando se pone async, transforma una funcion que retorna una promesa
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
        
    } catch (error) {
        throw error; //cuando mandamos throw, automaticamente madamos el reject
    }
}

const id = 3;


GetInfoUsuario(id)
    .then(mensaje => {
        console.log("TODO BIEN!")
        console.log(mensaje)
    })
    .catch(Error =>{
        console.log("TODO MAL!")
        console.log(Error)
    });

    // GetInfoUsuario(id)
    // .then(mensaje => console.log (mensaje))
    // .catch(Error => console.log (Error));


    // .then(msg => console.log(msg))
    // .catch(err => console.log(err));

