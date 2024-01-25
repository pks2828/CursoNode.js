require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    const busquedas = new Busquedas(); // se crea la instancia fuera del ciclo do while para evitar problemas
    let opt;

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                //Mostrar Mensaje
                const termino = await leerInput('Ciudad: ');
                
                // Buscar los lugar
                const lugares = await busquedas.ciudad( termino );

                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                if( id === '0') continue;
  
                const lugarSel = lugares.find(l => l.id === id);

                //Guardar DB
                busquedas.agregarHistorial(lugarSel.nombre);

                //clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
               
                // Mostrar resultados
                console.clear();
                console.log('\n Informacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Longitud:', lugarSel.lng);
                console.log('Temperatura:',clima.temp);
                console.log('Mínima',clima.min);
                console.log('Máxima:',clima.max);
                console.log('Como está el clima:',clima.desc );

            break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i) =>{
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })

            break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}    
main()