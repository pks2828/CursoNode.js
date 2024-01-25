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

const id = 5;

// getEmpleado(id)
//     .then(empleado => console.log(empleado) )
//     .catch( err => console.log(err) )

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))    

let nombre;

getEmpleado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log (`El empleado ${nombre} tiene un salario de ${salario}`)) //Con el then y catch se pone; hasta el final
    .catch(err => console.log(err));
