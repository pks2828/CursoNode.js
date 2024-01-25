const empleados = [
    {
        id:1,
        nombre: "Cochi",
    }, 

    {
        id:2,
        nombre: "Karen",
    },

    {
        id:3,
        nombre: "Vicky",
    }

];

const salarios = [
    {
        id:1,
        salario: 1000,
    }, 

    {
        id:2,
        salario: 2000,
    },

    {
        id:3,
        salario: 3000
    }

];
console.clear()

const getEmpleado = ( id ) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        if(!empleado){
            reject(`No existe un Empleado con el ID ${id}`);
        } 
        resolve(empleado)
    })
};

const getSalario = ( id ) =>{
    return new Promise((resolve,reject)=>{
        const salario = salarios.find(s => s.id === id)?.salario;
        if (!salario){
            reject (`No existe salario asociado al id ${id}`)
        }resolve(salario)
    });
}

const id = 1;

const getInfoUsuario = async() =>{
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)

        return (`El salario del empleado ${empleado} es de ${salario} `)

    } catch (error) {
        throw error
    }
}

getInfoUsuario(id)
    .then (mensaje => {
        console.log('Todo Bien!');
        console.log( mensaje );
    })
    .catch(error =>{
        console.error ('Algo Salio Mal...')
        console.log(error)
    })