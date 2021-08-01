function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.esAlto = function(){
    if(this.altura>=1.80){
        console.log(`${this.nombre} supera los 1.80 de altura con ${this.altura}`)
    }
    else{
        console.log(`${this.nombre} no supera los 1.80`)
    }
}

var diego = new Persona('Diego', 'Apellido', 1.72)
var ivo = new Persona('Ivo','Calveira',1.79)

diego.esAlto()
ivo.esAlto()