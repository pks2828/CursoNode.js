const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, //Estoy sacando los OBJETOS que se 'encuentran en inquirer'
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
        } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');//Esoty importando lo que exporte el archivo

require('colors'); // Exportando el modulo colores para estetica de la consola

const main = async() =>{ //FUNCION Main, esta FUNCION se hace para usar el ASYNC y AWAIT para la espera mientras se resuleven nuestras promesas

    let opt = '';//Creamos variable opcion
    const tareas = new Tareas();//Instancia de las tareas

    const tareasDB = leerDB();

    if(tareasDB){//cargar tareas
        tareas.cargartareasFromArray(tareasDB);
    }
    //SI NO EXISTEN NO SE HACE NADA POR QUE TODO LO DEMAS FUNCIONA IGUAL

    do {
        //Esta FUNCION imprime el menu, para ver la funcion alt + click para ver la defincion de la funcion
        opt = await inquirerMenu();//El inquirerMenu imprime el menu y retorna una opcion=opt
        
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea (desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3'://Listar completadas
                tareas.listarPendientesCompletadas(true);    
            break;

            case '4'://Listar Pendientes
                tareas.listarPendientesCompletadas(false);    
            break;

            case '5'://completado | pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                tareas.toggleCompletadas( ids );
            break;

            case '6'://borrar
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0' ){
                    const ok = await confirmar('Estas seguro?');
                    if ( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr)

        await pausa();
        

    } while (opt !== '0');

}
main()//Ejecucion de FUNCION Main



/*---------------NOTA-------------------
 PARA VERIFICAR SIEMPRE SI FUNCIONA EL SWITCH, PODEMOS IMPRIMIR CONSOLE.LOG (VARIABLE IGUAL A FUNCION)
 
 ---------------------------EJEMPLO-------------------------------------------------------
case '5': 'completado | pendiente'
                const ids = await mostrarListadoChecklist(Tareas.listadoArr)
                console.log(ids);
             break;
---------------------------------------------------------------------------------------------

COMO PODEMOS VER 
const ids = await mostrarListadoChecklist(Tareas.listadoArr)
console.log(ids);
    
    
CON ESTO PODEMOS VER SI FUNCIONA
*/
