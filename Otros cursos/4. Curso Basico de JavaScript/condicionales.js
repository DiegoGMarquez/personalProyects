//Piedra 1, papel 2, tijera 3
function juego(usuario){
    if(usuario == rival){
        resultado = "Es un empate"
    }
    else if(usuario==1 && rival!=2){
        resultado = "Gano el usuario"
    }
    else if(usuario==2 && rival!=3){
        resultado = "Gano el usuario"
    }
    else if(usuario==3 && rival!=1){
        resultado = "Gano el usuario"
    }
    else{
        resultado = "Gano la maquina"
    }
    return resultado;
}

var eleccion = prompt("Ingrese su eleccion");
var rival = 2;

juego(eleccion);
console.log(resultado);