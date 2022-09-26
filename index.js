// importacion de clases
import {Cliente} from './Cliente.js'
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';

//Creacion de instancias
// creacion de clientes
const cliente = new Cliente('Axel','1234543','1231231');
const cliente2 = new Cliente('María','1236544','1233281');

// creacion de cuentas
const cuentaDeAxel = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
// creacion de cuentas de ahorro
const cuentaDeAhorroAxel = new CuentaAhorro(cliente,'9985','001',0);
// console.log(cuentaDeAxel);
// console.log(cuentaDeAhorroAxel);

// console.log(cuentaDeAxel);
// console.log(cuentaDeAxel.deposito(150));
// console.log(`El saldo de la cuenta de ${cliente.nombreCliente} es:`);
// console.log(cuentaDeAxel.verSaldo());
// console.log('Retiro de 50:')
// console.log(cuentaDeAxel.retiro(50));
// console.log(`El saldo de la cuenta de ${cliente.nombreCliente} es:`);
// console.log(cuentaDeAxel.verSaldo());

// console.log('Cuenta de ahorro')
// console.log(cuentaDeAhorroAxel)
// console.log(cuentaDeAhorroAxel.deposito(150));
// console.log(cuentaDeAhorroAxel.verSaldo());
// console.log(cuentaDeAhorroAxel.retiro(50));
// console.log(cuentaDeAhorroAxel.verSaldo());

cuentaDeAxel.prueba();