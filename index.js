// importacion de clases
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js'
import { CuentaAhorro } from './CuentaAhoro.js';
//Creacion de instancias
// creacion de cliente axel
const cliente = new Cliente('Axel','1234543','1231231');

// creacion de cuenta de axel
const cuentaDeAxel = new CuentaCorriente(cliente,'1','001');

// console.log(cuentaDeAxel);
// console.log("****************");

// let saldo = cuentaDeAxel.verSaldo();
// console.log(`El saldo de la cuenta corriente de ${cliente.nombreCliente} es: ${saldo}`);

// saldo = cuentaDeAxel.deposito(150);
// console.log(`El saldo de la cuenta corriente de ${cliente.nombreCliente} es: ${saldo}`);

// creacion de cliente de maria
const cliente2 = new Cliente('María','1236544','1233281');

// creacion de cuenta de maria
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
// por referencia tiene una instancia de cliente
// cuentaDeMaria.cliente = cliente2;

// console.log(cuentaDeMaria.cliente)

// cuentaDeAxel.transferirCuenta(100,cuentaDeMaria);
// console.log("cuenta de Mária: ", cuentaDeMaria)


// const saldoMaria= cuentaDeMaria.verSaldo();
// console.log(`El saldo de la cuenta corriente de María es: ${saldoMaria}`);

// const saldoAxel = cuentaDeAxel.verSaldo();
// console.log(`El saldo de la cuenta corriente de ${cliente.nombreCliente} es: ${saldoAxel}`);
console.log(CuentaCorriente.cantidadCuentas)