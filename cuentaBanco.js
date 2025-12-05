class cuentaBancaria {
    #numeroCuenta;
    #saldo;
    constructor(numeroCuenta, saldoInicial = 0) {
        this.#numeroCuenta = numeroCuenta;
        this.#saldo = saldoInicial;
    }
    get saldo () { return this.#saldo; }
    get numeroCuenta () { return this.#numeroCuenta; }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`depósito exitoso de ${monto}. nuevo saldo: ${this.#saldo}`);
        }
        else {
            console.log('el monto a depositar debe ser positivo.');
        }
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`retiro exitoso de ${monto}. nuevo saldo: ${this.#saldo}`);
        }
        else if (monto > this.#saldo) {
            console.log('fondos insuficientes para el retiro.');
        }
        else {
            console.log('el monto a retirar debe ser positivo.');
        }
    }
    mostrarInfo() {
        console.log(`número de cuenta: ${this.#numeroCuenta}\nsaldo: ${this.#saldo}`);
    }  
}

class cuentaAhorros extends cuentaBancaria {
    #tasaInteres;
    constructor(numeroCuenta, saldoInicial, tasaInteres) {
        super(numeroCuenta, saldoInicial);
        this.#tasaInteres = tasaInteres;
    } 
    get tasaInteres() { return this.#tasaInteres; }

    aplicarInteres() {
        let interes = this.saldo * this.#tasaInteres / 100;
        this.depositar(interes);
        console.log(`interés aplicado: ${interes}. nuevo saldo: ${this.saldo}`);
    }
    retirar(monto) {
        super.retirar(monto);
    }
    depositar(monto) {
        super.depositar(monto);
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`tasa de interés: ${this.#tasaInteres}%`);
    }
}

class cuentaCorriente extends cuentaBancaria {
    #limiteDescubierto;
    constructor(numeroCuenta, saldoInicial, limiteDescubierto) {
        super(numeroCuenta, saldoInicial);
        this.#limiteDescubierto = limiteDescubierto;
    }
    get limiteDescubierto() { return this.#limiteDescubierto;  }

    retirar(monto) {
        super.retirar(monto);
    }
    depositar(monto) {
        super.depositar(monto);
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`límite de descubierto: ${this.#limiteDescubierto}`);
    }

}
//objetos 
const cuentaAhorro1 = new cuentaAhorros('A123', 1000000, 5);
const cuentaCorriente1 = new cuentaCorriente('C456', 2000000, 500);
const cuenta = new cuentaBancaria('B789', 1500000);

//mostrar info
console.log("----- informacion de las cuentas bancarias -----")
cuentaAhorro1.mostrarInfo();
cuentaCorriente1.mostrarInfo();
cuenta.mostrarInfo();

console.log("----- operaciones en las cuentas bancarias -----")
console.log("cuenta A123")
cuentaAhorro1.depositar(500);
cuentaAhorro1.aplicarInteres();
cuentaAhorro1.retirar(300);
console.log("-------------------------------------------------")
console.log("cuenta C456")
cuentaCorriente1.depositar(800);
cuentaCorriente1.retirar(2500);
cuentaCorriente1.retirar(400);
console.log("-------------------------------------------------")
console.log("cuenta B789")
cuenta.depositar(200);
cuenta.retirar(100);