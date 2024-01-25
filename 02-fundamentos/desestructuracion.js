const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }

}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe({nombre,apellido,poder}){

    console.log(nombre,apellido,poder);
}

// imprimeHeroe(deadpool);

// const {nombre,apellido,poder} = deadpool;
// console.log(nombre,apellido,poder);

const heroes = ["Deadpool","Superman","Batman"];

const [, ,h3] = heroes;

console.log(h3);