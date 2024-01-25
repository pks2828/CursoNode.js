function imprimirTexto(letras){
    letras = letras 
    return console.log(letras)
}

imprimirTexto("Holaaaaaaaaa")

function sumarNum(a,b){
    sumar = (a+b)
    console.log(`El numero sumado es: ${sumar}`)
    return a + b;
}

sumarNum(6,5)

function saludar(){
    console.log("Hola mundo")
}

saludar()

//Funcion Dia de la semana
function diaSemana(numDia){
    switch (numDia) {
        case 1:
            numDia = "Es lunes";
            break;
        case 2:
            numDia = "Es martes";
            break;
        case 3:
            numDia = "Es miércoles";
            break;
        case 4:
            numDia = "Es jueves";
            break;
        case 5:
            numDia = "Es viernes";
            break;
        case 6:
            numDia = "Es sábado";
            break;
        case 7:
            numDia = "Es domingo";
            break;
        default:
            numDia = "Número de día no válido";
    }
    
    return console.log(numDia)
}

diaSemana(1);

function IncrementarNum(num){
    for(let i = 0; i <= num; i++){
        console.log(i)

    }
}

IncrementarNum(8);

function decrementarNum(num){
    for(let i = num; i > 0; i-- ){
        console.log(i)
    }
}

decrementarNum(7)