var dario = {
    nombre: 'Dario',
    edad: 27
}
var diego = {
    nombre: 'Diego',
    edad: 21
}

function imprimirNombreYEdad(persona){
    var { nombre } = persona
    var { edad } = persona
    // console.log(nombre.toUpperCase())
    console.log(`Hola me llamo ${nombre} y tengo ${edad} anios`)
}

imprimirNombreYEdad(dario)
imprimirNombreYEdad(diego)