// - class Ususario

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  // Metodos

  getFullName = () =>
    console.log(`Nombre Completo es ${this.nombre} ${this.apellido}`);

  addMascota = (nombre_mascota) => this.mascotas.push(nombre_mascota);

  countPets = () =>
    console.log(`El usuario ${this.nombre} tiene ${this.mascotas.length} mascotas.`)

}

// Instancia
const usuario_uno = new Usuario("Leandro", "Annarumma");


// Metodos Aplicados

usuario_uno.getFullName();

// # Adding pets to array.
usuario_uno.addMascota("Marimba")
usuario_uno.addMascota("Polinesia")

console.log(usuario_uno.mascotas);

usuario_uno.countPets()

