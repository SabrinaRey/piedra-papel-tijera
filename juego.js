let usuarioUno = prompt ("Ingrese el nombre del primer jugador");

let usuarioDos = prompt ("Ingrese el nombre del segundo jugador");

let piedra = "piedra";

let papel = "papel";

let tijera = "tijera";

let empate = "Han empatado";

let ganador = "El ganador es: ";

let puntosUsuarioUno =0;

let puntosUsuarioDos =0;

let final ="El juego ha terminado y el ganador es: "


for ( let i = 0; puntosUsuarioUno < 2|| puntosUsuarioDos < 2; i++) {

let eleccionUsuario1 = prompt(usuarioUno + ": Elegí piedra, papel o tijera");

if (eleccionUsuario1 === piedra || eleccionUsuario1 === tijera || eleccionUsuario1 === papel) {
    let eleccionUsuario2 = prompt(usuarioDos + ": Elegí piedra, papel o tijera");

    if (eleccionUsuario2 === eleccionUsuario1) {
        alert(empate)
    }

    else if (eleccionUsuario1 === piedra && eleccionUsuario2 === papel) {
        alert(ganador + usuarioDos)
        puntosUsuarioDos++

           }
    else if (eleccionUsuario1 === piedra && eleccionUsuario2 === tijera) {
        alert(ganador + usuarioUno)
        puntosUsuarioUno++
    }
    else if (eleccionUsuario1 === papel && eleccionUsuario2 === piedra) {
        alert(ganador + usuarioUno)
        puntosUsuarioUno++
    }
    
    else if (eleccionUsuario1 === papel && eleccionUsuario2 === tijera) {
        alert(ganador + usuarioDos)
        puntosUsuarioDos++
    }

    else if (eleccionUsuario1 === tijera && eleccionUsuario2 === papel) {
        alert(ganador + usuarioUno)
        puntosUsuarioUno++
    }

    else if (eleccionUsuario1 === tijera && eleccionUsuario2 === piedra) {
        alert(ganador + usuarioDos)
        puntosUsuarioDos++
    }
    

    else {
        alert("No podes seguir jugando");
    };
}
else {
    alert("No podes seguir jugando");
};
}

if (puntosUsuarioUno > puntosUsuarioDos) {
    alert( final + usuarioUno)
}
else {
    alert( final + usuarioDos)

};







