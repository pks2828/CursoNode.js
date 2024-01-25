const empleados = [{
    id: 1,
    nombre: 'Angel',
    apellido: 'Doria',
    edad: 20
}];

const salarios = [{
    id:1,
    salario: 8000
}];

const getNombre = ( id ) =>{
    return new Promise((resolve, reject) =>{
        const nomEmpleado = empleados.find(n => n.id === id)?.nombre
        if(!nomEmpleado){
            reject(`No existe un empleado con el ID ${id}`);
        }
        resolve(nomEmpleado)
    });
}

const getApellido = ( id ) =>{
    return new Promise((resolve, reject) =>{
        const apelliEmpleado = empleados.find(a => a.id === id)?.apellido
        if(!apelliEmpleado){
            reject(`El empleado no tiene asociado apellido${id}`);
        }
        resolve(apelliEmpleado)
    });
}

const getEdad = ( id ) =>{
    return new Promise((resolve, reject) =>{
        const edadEmpleado = empleados.find(e => e.id === id)?.edad
        if(!edadEmpleado){
            reject(`El empleado no tiene asociado edad ${id}`);
        }
        resolve(edadEmpleado)
    });
}

const getSalario = (id) =>{
    return new Promise((resolve,reject) =>{
        const salario = salarios.find(s => s.id === id)?.salario
        if(!salario){
            reject(`El Empleado no tiene asignado un Salario`);
        }
        resolve(salario)
    })
}

id = 1;

const getInfoUsuario = async() =>{
    try {
        const nomEmpleado = await getNombre(id)
        const apelliEmpleado = await getApellido(id)
        const edadEmpleado = await getEdad(id)
        const salario = await getSalario(id)

        return (`${ nomEmpleado } ${ apelliEmpleado } ${ edadEmpleado } ${ salario }`)

    } catch (error) {
        throw error
    }
}

getInfoUsuario(id)
    .then(mensaje =>{
        console.log('TODO SALIO PERFECTO')
        console.log(mensaje)
    })
    .catch(error =>{
        console.log('TODO MAL!');
        console.log(error)
    })
