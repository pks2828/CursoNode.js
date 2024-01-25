const Tarea = require('./tarea');

class Tareas{ //Crear clase
    _listado = {};//lo estamos manejando como un objeto {} si lo manejaramos un arreglo[] basta con hacer this._listado.push
    
    // ^ PROPIEDAD de nuestra clase

    get listadoArr(){ //Getter para retornar un nuevo arreglo
        
        const listado = []; //Se pone como arreglo por que va a ser lo que temrina retonando a 'Listado'

        //FUNCION PARA RETORNAR EL ARREGLO
                                        //Con esta llave identifico que tareas tengo insertadas en el listado
        Object.keys(this._listado).forEach( key => {//Metodo en su objeto (object.keys) el cual puedo extraer cada una de las llaves que se encuentren en ._listado
                                    //Barrer cada una de las llaves del _listado
            const tarea = this._listado[key];//con esta declaracion de variaable insertamos tareas a nuestro 'listado = []'
            listado.push( tarea );//metodo para anadir al listado
        } );

        return listado; // se retorna el valor
        //TODO ESTE BLOQUE ES SINCRONO POR ESO NO SE PONE NADA, TODA LA LOGICA DEL BLOQUE ESTA EN JS, NO EN NODE
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea (id = ''){
        delete this._listado[id];
    }

    cargartareasFromArray( tareas = [] ){

        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });

    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc); 
        this._listado[tarea.id] = tarea;//Si quiero hacer referencia a la propiedad de un objeto hacemos referencia entre llaves
    }

    listadoCompleto(){

        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ?'completada'.green
                            :'pendiente'.red;

            console.log(`${ idx }${'.'.green} ${ desc } :: ${ estado }`);
                            
        });
    }

    listarPendientesCompletadas( completadas = true){

        console.log();
        let contador = 0
        this.listadoArr.forEach(tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ?'completada'.green
                            :'pendiente'.red;
            if (completadas){
                //CompletadoEn
                if ( completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${new Date (completadoEn)}`);
                }
            } else {
                //No Completado
                if ( !completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc }::${ estado }`);
                }
            }
        })
    }

    toggleCompletadas(ids = [] ){
        ids.forEach(id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

    this.listadoArr.forEach( tarea => {

        if (!ids.includes(tarea.id)){
            this._listado[tarea.id].completadoEn = null;
        }
    })
    }

}

module.exports = Tareas;