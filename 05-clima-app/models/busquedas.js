const fs = require('fs');

const axios = require('axios');

class Busquedas{ //Las clases siempre empiezan UpperCamelCase
    
    historial = []
    dbPath = './db/database.json';//Las propiedas se van a definir arriba por fines educativos para saber que existen

    constructor(){
        // TODO: leer DB si existe
        this.leerDB();
    }

    get historialCapitalizado(){
        return this.historial.map( lugar =>{

            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(' ')
        })
    }

    get paramsMapbox(){
        return {
            "proximity":`ip`,
            'language':`es`,
            "access_token": process.env.MAPBOX_KEY
        }

        
    }

    get paramsWeather(){
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        } 
    }

    
    async ciudad(lugar = ''){//Metodo para obtener el lugar, lugar definido es un string

        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,//Todo lo que viene con ? en una URL son los parametros
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

            //console.log('Ciudad',lugar); Con esto nos aseguramos que pase por aqui desde el index
            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?proximity=ip&language=es&access_token=pk.eyJ1IjoiYW5nZWx0aWJzMjgiLCJhIjoiY2xyamk1cmx2MDFuZjJsb2JjN3prazd5eSJ9.90s5wfMawG97L6rfLmQazg');            

        } catch (error) {
            return[];
            
        }
    }

    async climaLugar(lat,lon){
        try {
            //Peticion http

            //instance axios.create
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,//Todo lo que viene con ? en una URL son los parametros
                params: {...this.paramsWeather, lat,lon}
            })

            const resp = await instance.get();
            const {weather, main} = resp.data;



            //resp.data

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (error) {
            console.log(error)
        }
    }

    agregarHistorial(lugar = ''){
        //TODO: prevenir duplicados
        if(this.historial.includes(lugar.toLocaleLowerCase() ) ){
            return;
        }

        this.historial = this.historial.splice(0,5);

        this.historial.unshift(lugar.toLocaleLowerCase());

        // grabar db
        this.guardarDB();
    }

    guardarDB(){

        const payload = {
            historial: this.historial
        }

        fs.writeFileSync(this.dbPath,JSON.stringify(payload))
    }

    leerDB(){
        if(!fs.existsSync ( this.dbPath)) return;

        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info);

        this.historial = data.historial;

    }
}


module.exports = Busquedas