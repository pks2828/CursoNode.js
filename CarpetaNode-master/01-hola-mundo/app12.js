//Codigo para recuperar un usuario mediante 3 funciones. 2 funciones que van obtener de manera inidivual salario y nombre
//y la funcion principal que obtendra ambos

const empleados = [{id:1, nombre: "Angel Doria"},{id:2, nombre: "Hector Esparza"},{id:3, nombre: "Tio pepe"}];
const salarios = [{id:1, salario: 1000},{id:2, salario: 10000}];

const getEmpleado = ( id ) => {
    return new Promise((resolve,reject)=>{
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ?resolve(empleado)
            :reject(`No existe el empleado asociado con el id ${id}`);
    });
}

const getSalario = ( id ) => {
    return new Promise((resolve,reject)=> {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`No existe salario asociado con el id ${id}`);
    });
}

const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return(`El salario del empledo: ${empleado} es de ${salario}`);

    } catch (error) {
        throw error;
        
    }
}

const id = 1;

getInfoUsuario(id)
    .then(mensaje=> {
        console.log("TODO BIEN!")
        console.log(mensaje)
    })
    .catch(Error =>{
        console.log("TODO MAL!")
        console.log(Error)
    });