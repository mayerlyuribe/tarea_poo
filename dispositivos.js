class dispositivos {
    #marca;
    #numeroSerie;
    #modelo;

    constructor(marca, numeroSerie, modelo) {
        this.#marca = marca;
        this.#numeroSerie = numeroSerie;
        this.#modelo = modelo;
    }
    get marca() { return this.#marca; }
    get numeroSerie() { return this.#numeroSerie; }
    get modelo() { return this.#modelo; }

    enceder(){
        console.log(`el dispositivo ${this.#marca} modelo ${this.#modelo} está encendido.`);
    }
    apagar(){
        console.log(`el dispositivo ${this.#marca} modelo ${this.#modelo} está apagado.`);
    }
}

class smartphone extends dispositivos {
    #sistemaOperativo;
    #bateria;

    constructor(marca, numeroSerie, modelo, sistemaOperativo, bateria) {
        super(marca, numeroSerie, modelo);
        this.#sistemaOperativo = sistemaOperativo;
        this.#bateria = bateria;    

    }
    get sistemaOperativo() { return this.#sistemaOperativo; }
    get bateria() { return this.#bateria; }

    enceder(){
        console.log(`el smartphone ${this.marca} está encendido.`)
    }
    apagar(){
        console.log(`el smartphone ${this.marca} está apagado.`)
    }
}
class laptop extends dispositivos {
    #procesador;
    #RAM;
    constructor(marca, numeroSerie, modelo, procesador, RAM) {
        super(marca, numeroSerie, modelo);
        this.#procesador = procesador;
        this.#RAM = RAM;
    }
    get procesador() { return this.#procesador; }
    get RAM() { return this.#RAM; }
    enceder(){
        console.log(`la laptop ${this.marca} está encendida.`)
    }
    apagar(){
        console.log(`la laptop ${this.marca} está apagada.`)
    }
}

//objetos
const smartphone1 = new smartphone("Apple", "SN123456", "iPhone 13", "iOS", "85%");
const laptop1 = new laptop("Dell", "SN654321", "XPS 15", "Intel i7", "16GB");
smartphone1.enceder();
laptop1.apagar();