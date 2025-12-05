class publicacion {
    #titulo;
    #autor;
    #fecha; //fecha de publicación
    constructor(titulo, autor, fecha) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#fecha = fecha;
    }
    get titulo() { return this.#titulo; }
    get autor() { return this.#autor; }
    get fecha() { return this.#fecha; }
    mostrarInfo() {
        console.log(`título: ${this.#titulo}\nautor: ${this.#autor}\nfecha de publicación: ${this.#fecha}`);
    }
}

class libro extends publicacion {
    #numPaginas;
    #ISBN;
    constructor(titulo, autor, fecha, numPaginas, ISBN) {
        super(titulo, autor, fecha);
        this.#numPaginas = numPaginas;
        this.#ISBN = ISBN;
    }
    get numPaginas() { return this.#numPaginas; }
    get ISBN() { return this.#ISBN; }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`número de páginas: ${this.#numPaginas}\nISBN: ${this.#ISBN}`);
    }
}

class articulo extends publicacion {
    #revista;

    constructor(titulo, autor, fecha, revista) {
        super(titulo, autor, fecha);
        this.#revista = revista;
    }

    get revista() { return this.#revista; }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`revista: ${this.#revista}`);
    }
}

//objetos 
const libro1 = new libro ("Romeo y Julieta", "Willian Shakespeare", "1597", 256, "978-3-16-148410-0");
const articulo1 = new articulo ("La relatividad", "Albert Einstein", "1916", "Annalen der Physik");

libro1.mostrarInfo();
console.log('-------------------');
articulo1.mostrarInfo();