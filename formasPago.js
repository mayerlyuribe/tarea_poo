class formasPago {
    #cantidad;
    #fecha;
    constructor(cantidad, fecha) {
        this.#cantidad = cantidad;
        this.#fecha = fecha;
    }
    get cantidad() { return this.#cantidad; }
    get fecha() { return this.#fecha; }
    procesarPago(){
        console.log(`procesando pago de ${this.#cantidad} en la fecha ${this.#fecha}... `)
    }
}
class pagoTarjeta extends formasPago {
    #numeroTarjeta;
    #cvv;
    #fechaExpiracion;
    constructor(cantidad, fecha, numeroTarjeta, cvv, fechaExpiracion) {
        super(cantidad, fecha);
        this.#numeroTarjeta = numeroTarjeta;
        this.#cvv = cvv;
        this.#fechaExpiracion = fechaExpiracion;
    }
    get numeroTarjeta() { return this.#numeroTarjeta; }
    get cvv() { return this.#cvv; }
    get fechaExpiracion() { return this.#fechaExpiracion; }

    procesarPago(){
        console.log(`procesando pago con tarjeta: ${this.#numeroTarjeta}\ncantidad ${this.cantidad}\nfecha: ${this.fecha} `)
    }
}

class transferencia extends formasPago {
    #cuentaOrigen;
    #cuentaDestino;
    #banco;
    constructor(cantidad, fecha, cuentaOrigen, cuentaDestino, banco) {
        super(cantidad, fecha);
        this.#cuentaOrigen = cuentaOrigen;
        this.#cuentaDestino = cuentaDestino;
        this.#banco = banco;
    }
    get cuentaOrigen() { return this.#cuentaOrigen; }
    get cuentaDestino() { return this.#cuentaDestino; }
    get banco() { return this.#banco; }

    procesarPago(){
        console.log(`procesando transferencia...  \ncantidad: ${this.cantidad}\ncuenta origen: ${this.#cuentaOrigen}\ncuenta destino: ${this.#cuentaDestino}\nfecha ${this.fecha} `)
    }
}

//objetos 
const pago1 = new formasPago(50000, "2024-06-10");
const pago2 = new pagoTarjeta(15000, "2024-06-11", "1234-5678-9012-3456", "123", "12/26");
const pago3 = new transferencia(29000, "2024-06-12", "AC1566281", "BDC1234928", "Bancolombia");

pago1.procesarPago();
console.log("--------------------")
pago2.procesarPago();
console.log("--------------------")
pago3.procesarPago();