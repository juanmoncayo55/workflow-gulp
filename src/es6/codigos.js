((c, w, d) => {
	c("Hola Mundo")
	class Persona{
		constructor(nombre, edad, cedula, mascota){
			this.nombre = nombre;
			this.edad = edad;
			this.cedula = cedula;
			this.mascota = mascota;

			this.bdPersona = [];
		}

		agregarPersona(){
			let persona = {
				nombre: this.nombre,
				edad: this.edad,
				cedula: this.cedula,
				mascota: this.mascota
			}
			this.bdPersona.push(persona);
		}

		mostrarPersonas(){
			c(this.bdPersona);
		}
	}
	const persona = new Persona("Juan",25,1021364,"Pepa");
	const persona2 = new Persona("Sonia",52,45555,"Pepa");
	persona.agregarPersona();
	persona2.agregarPersona();
	persona.mostrarPersonas()
	persona2.mostrarPersonas()

})(console.log, window, document)