class alimentos {
    #nombre;
    #fechaCaducidad;
    #calorias;
    constructor(nombre, fechaCaducidad, calorias) {
        this.#nombre = nombre;
        this.#fechaCaducidad = fechaCaducidad;
        this.#calorias = calorias;
    }
    get nombre() { return this.#nombre; }
    get fechaCaducidad() { return this.#fechaCaducidad; }
    get calorias() { return this.#calorias; }

    mostrarInfo() {
        console.log(`Nombre: ${this.#nombre}\nFecha de Caducidad: ${this.#fechaCaducidad}\nCalorías: ${this.#calorias}`);
    }
    verificarCaducidad(fechaActual){
        const fechaCaducidad = new Date(this.#fechaCaducidad);
        const fechaHoy = new Date(fechaActual);
        if (fechaHoy > fechaCaducidad) {
            console.log(`El alimento ${this.#nombre} está caducado.`);
        } else {
            console.log(`El alimento ${this.#nombre} no está caducado.`);
        }
    }
}

class alimentoPerecible extends alimentos {
    #temeperatura
    #diasVidaUtil;
    constructor(nombre, fechaCaducidad, calorias, temeperatura, diasVidaUtil) {
        super(nombre, fechaCaducidad, calorias);
        this.#temeperatura = temeperatura;
        this.#diasVidaUtil = diasVidaUtil;
    }
    get temeperatura() { return this.#temeperatura; }
    get diasVidaUtil() { return this.#diasVidaUtil; }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Temperatura de almacenamiento: ${this.#temeperatura}\nDías de vida útil: ${this.#diasVidaUtil}`);
    }
}

class alimentoEnlatado extends alimentos {
    #lote;
    constructor(nombre, fechaCaducidad, calorias, lote) {
        super(nombre, fechaCaducidad, calorias);
        this.#lote = lote;
    }
    get lote() { return this.#lote; }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Lote: ${this.#lote}`);
    }
}

const alimento1 = new alimentos("Leche", "2024-06-15", 150);
const alimento2 = new alimentoPerecible("Yogur", "2024-06-20", 100, "4°C", 10);
const alimento3 = new alimentoEnlatado("Atún", "2025-12-31", 200, "L12345");

console.log("---- info de los alimetos ----");
alimento1.mostrarInfo();
alimento2.mostrarInfo();
alimento3.mostrarInfo();
console.log("---- verificacion de caducidad ----");
alimento1.verificarCaducidad("2025-12-05");
alimento2.verificarCaducidad("2025-12-05");
alimento3.verificarCaducidad("2025-12-05");