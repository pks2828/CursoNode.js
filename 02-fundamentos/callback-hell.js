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

const getEmpleado = ( id, ejemploCallback ) => {  // CREACION DE FUNCION OBTENER EMPLEADO
    const empleado = empleados.find( e => e.id === id )

    if(empleado){
        ejemploCallback(null, empleado.nombre);
    }else{
        ejemploCallback(`empleado con id ${id} no existe`);
    }
}

const getSalario = (id, ejemploCallback ) =>{ // Declaración de la función getSalario
    const salario = salarios.find(s => s.id === id)?.salario; // pregunta si el salario ID es el mismo que recibe como argumento
    if(salario){ 
        ejemploCallback(null, salario);//si existe voy a llamar al salario con null como argumento por que no hay ningun error )
    }else{// caso contrario se manda a llamar al error con callback
        ejemploCallback(`salario con ${id} no existe`);
    }
}

const id = 1;

getEmpleado (id, ( err, empleado ) => { // Uso de la función getSalario con una llamada de devolución de llamada (callback)
    if ( err ){
        console.log("ERROR!");
        return console.log(err);
    }

    getSalario(id,(err, salario) => {

        if( err ){
            return console.log(err);
        }

        console.log("El empleado:",empleado,"tiene un salario de: ",salario);
    })
})