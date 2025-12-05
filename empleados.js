class empleados {
    #nombre;
    #ID;
    #salario;
    #tipoEmpleado;

    constructor(nombre, ID, salario, tipoEmpleado) {
        this.#nombre = nombre;
        this.#ID = ID;
        this.#salario = salario;
        this.#tipoEmpleado = tipoEmpleado;
    }

    get nombre() { return this.#nombre; }
    get ID() { return this.#ID; }
    get salario() { return this.#salario; }
    get tipoEmpleado() { return this.#tipoEmpleado; }

    // acá van a ir los sets, pero aun no he pensado en que poner.

    mostrarInfo(){
        console.log(`empleado: ${this.#nombre}\nID: ${this.#ID}\nsalario: ${this.#salario}\ntipo de empleado: ${this.#tipoEmpleado}`);
    }

    calcularSalarioAnual(){
        this.#salario *= 12;
        console.log(`el salario anual del empleado ${this.#nombre} es de ${this.#salario}`)
    }

    bonoAnual(){
        let bono = this.#salario * 0.10;
        console.log(`el bono anual del empleado ${this.#nombre} es de ${bono}`)
    }
}

class empleadoTiempoCompleto extends empleados {
    #horasExtra;

    constructor(nombre, ID, salario, horasExtra, tipoEmpleado) {
        super(nombre, ID, salario, tipoEmpleado);  
        this.#horasExtra = horasExtra;
    }

    get horasExtra() { return this.#horasExtra; }

    calcularSalarioAnual(){
        let salarioBase = this.salario * 12;
        let pagoHorasExtra = this.#horasExtra * 20 * 12; // suponiendo $20 por hora extra.
        let salarioAnualTotal = salarioBase + pagoHorasExtra;
        console.log(`el salario anual del empleado ${this.nombre} es de ${salarioAnualTotal}`);
    }
    mostrarInfo(){
        super.mostrarInfo();
        console.log(`Horas extra trabajadas: ${this.#horasExtra}`);
    }
}
// clase hija para empleado por horas
class empleadoHoras extends empleados {
    #horasTrabajadas;
    #pagoPorHora = 3000;

    constructor (nombre, ID, horasTrabajadas, pagoPorHora, tipoEmpleado){
        super(nombre, ID, 0, tipoEmpleado);
        this.#horasTrabajadas = horasTrabajadas;
        this.#pagoPorHora = pagoPorHora;
        }

    get horasTrabajadas() { return this.#horasTrabajadas; }
    get pagoPorHora() { return this.#pagoPorHora; }

    calcularSalarioMensual(){
        let salarioMensual = this.#horasTrabajadas * this.#pagoPorHora;
        console.log(`el salario mensual del empleado ${this.nombre} es de ${salarioMensual}`);
    }
    mostrarInfo(){
        console.log(`empleado: ${this.nombre}\nID: ${this.ID}\nHoras trabajadas: ${this.#horasTrabajadas}\nPago por hora: ${this.#pagoPorHora}\ntipo de empleado: ${this.tipoEmpleado}`);
        }

}



const empleado = new empleados("juliana", "1105", 150000, "empleado común");
const empleadoTC = new empleadoTiempoCompleto("mateo","0012", 50000, 10, "empleado tiempo completo");
const empleadoH = new empleadoHoras("yeison", "7789", 250, 3000, "empleado por horas");

console.log("---- informacion de los empleados ----");

empleado.mostrarInfo();
console.log("-------------------------------------");
empleadoTC.mostrarInfo();
console.log("-------------------------------------");
empleadoH.mostrarInfo();

console.log("\n---- calculos de los salarios ----");

empleado.calcularSalarioAnual();
empleado.bonoAnual();
console.log("-------------------------------------");
empleadoTC.calcularSalarioAnual();
empleadoTC.bonoAnual();
console.log("-------------------------------------");
empleadoH.calcularSalarioMensual();