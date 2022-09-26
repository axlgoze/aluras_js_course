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
const cuentaDeAxel = new Cuenta(cliente,'1','001',0);
const cuentaDeMaria = new Cuenta(cliente2,'2','002',0);
// creacion de cuentas de ahorro
const cuentaDeAhorroAxel = new Cuenta(cliente,'9985','001',0);
// console.log(cuentaDeAxel);
// console.log(cuentaDeAhorroAxel);
console.log('******')

// console.log(cuentaDeAxel.deposito(150));
// console.log(cuentaDeAxel.verSaldo());
// console.log(cuentaDeAxel.retiro(100));
// console.log(cuentaDeAxel.verSaldo());
console.log('Cuenta de ahorro')
console.log(cuentaDeAhorroAxel)
console.log(cuentaDeAhorroAxel.deposito(3059));
console.log(cuentaDeAhorroAxel.verSaldo());
console.log(cuentaDeAhorroAxel.retiro(120));
console.log(cuentaDeAhorroAxel.verSaldo());

