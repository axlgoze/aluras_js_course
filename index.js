// importacion de clases
import {Cliente} from './Cliente.js'
// import {CuentaCorriente} from './CuentaCorriente.js'
// import { CuentaAhorro } from './CuentaAhoro.js';
import { Cuenta } from './Cuenta.js';

//Creacion de instancias
// creacion de clientes
const cliente = new Cliente('Axel','1234543','1231231');
const cliente2 = new Cliente('María','1236544','1233281');

// creacion de cuentas
const cuentaDeAxel = new Cuenta('Corriente',cliente,'1','001',0);
const cuentaDeMaria = new Cuenta('Corriente',cliente2,'2','002',0);
// creacion de cuentas de ahorro
const cuentaDeAhorroAxel = new Cuenta('Ahorro',cliente,'9985','001',0);
// console.log(cuentaDeAxel);
// console.log(cuentaDeAhorroAxel);

console.log('Cuenta Corriente')
console.log('Deposito de 150:')
console.log(cuentaDeAxel.deposito(150));
console.log(`El saldo de la cuenta de ${cliente.nombreCliente} es:`);
console.log(cuentaDeAxel.verSaldo());
console.log('Retiro de 50:')
console.log(cuentaDeAxel.retiro(50));
console.log(cuentaDeAxel.verSaldo());
console.log('Cuenta de ahorro')
console.log(cuentaDeAhorroAxel)
console.log(cuentaDeAhorroAxel.deposito(150));
console.log(cuentaDeAhorroAxel.verSaldo());
console.log(cuentaDeAhorroAxel.retiro(50));
console.log(cuentaDeAhorroAxel.verSaldo());

