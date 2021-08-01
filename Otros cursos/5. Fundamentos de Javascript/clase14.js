var personaDiego = {
    nombre: 'Diego',
    edad: 19
}

const esMayorDeEdad = persona => persona >= 18

const esMenorDeEdad = persona => !esMayorDeEdad()

if (esMenorDeEdad(personaDiego)){
    console.log(`Es mayor de edad`)
}