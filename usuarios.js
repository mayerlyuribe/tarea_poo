class usuarios {
    #nombre;
    #email;
    #constraseña;

    constructor(nombre, email, constraseña) {
        this.#nombre = nombre;
        this.#email = email;
        this.#constraseña = constraseña;
    }
    get nombre() { return this.#nombre; }
    get email() { return this.#email; }
    get constraseña() { return this.#constraseña; }

    iniciarSesion(){
        console.log(`El usuario ${this.#nombre} ha iniciado sesión.`);
    }
    cerrarSesion(){
        console.log(`El usuario ${this.#nombre} ha cerrado sesión.`);
    }
}
class usuarioAdmin extends usuarios {
    #nivelAcceso;
    #permisos;
    constructor(nombre, email, constraseña, nivelAcceso, permisos) {
        super(nombre, email, constraseña);
        this.#nivelAcceso = nivelAcceso;
        this.#permisos = permisos;
    }
    get nivelAcceso() { return this.#nivelAcceso; }
    get permisos() { return this.#permisos; }

    iniciarSesion(){
        console.log(`El usuario ${this.nombre} ha iniciado sesión como administrador\nnivel de acceso: ${this.#nivelAcceso}.`);
    }
}

class invitado extends usuarios {
    #tiempoAcceso;
    constructor(nombre, email, constraseña, tiempoAcceso) {
        super(nombre, email, constraseña);
        this.#tiempoAcceso = tiempoAcceso;
    }
    get tiempoAcceso() { return this.#tiempoAcceso; }
    iniciarSesion(){
        console.log(`El usuario invitado ${this.nombre} ha iniciado sesión por ${this.#tiempoAcceso} horas.`);
    }
}

//objetos

const usuario1 = new usuarios("Carlos", "carlos@gmail.com", "abcdefg123");
const usuario2 = new usuarioAdmin("Ana", "ana@gmail.com", "hijklmn456", 1, ["leer", "escribir"]);
const usuario3 = new invitado("Luis", "luis@gmail.com", "mnopqrs789", 2);

usuario1.iniciarSesion();
usuario2.iniciarSesion();
usuario3.iniciarSesion();
usuario3.cerrarSesion();
console.log("--------------------")
console.log(`los permisos del usuario ${usuario2.nombre} son: ${usuario2.permisos}`)