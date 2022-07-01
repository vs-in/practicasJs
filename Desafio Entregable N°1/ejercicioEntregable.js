// - class Ususario

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  // Metodos

  getFullName = () =>
    console.log(`Nombre Completo es ${this.nombre} ${this.apellido}`);

  addMascota = (nombre_mascota) => this.mascotas.push(nombre_mascota);

  countMascota = () =>
    console.log(
      `El usuario ${this.nombre} tiene ${this.mascotas.length} mascotas.`
    );

  addLibro = (nombre_libro, autor) => {
    const libro = {
      name: `${nombre_libro}`,
      autor: `${autor}`,
    };

    this.libros.push(libro);
  };
  getBookNames = () => console.log(this.libros.map((el) => el.name));
}

// Instancia
const usuario_uno = new Usuario("Leandro", "Annarumma");

// Metodos Aplicados

usuario_uno.getFullName();

//Añadir Mascostas
usuario_uno.addMascota("Marimba");
usuario_uno.addMascota("Polinesia");

console.log(usuario_uno.mascotas);

usuario_uno.countMascota();

//Añadir libros
usuario_uno.addLibro("El hombre mas rico de babilonia", "George Samuel Clason");
usuario_uno.addLibro("El Negociador", "Arturo Elias Ayub");

console.log(usuario_uno.libros);

usuario_uno.getBookNames();
console.log(usuario_uno.libros);
