// importacion de clases
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js'
import { CuentaAhorro } from './CuentaAhoro.js';

//Creacion de instancias
// creacion de clientes
const cliente = new Cliente('Axel','1234543','1231231');
const cliente2 = new Cliente('María','1236544','1233281');

// creacion de cuentas
const cuentaDeAxel = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
// creacion de cuentas de ahorro
const cuentaDeAhorroAxel = new CuentaAhorro(cliente,'9985','1','001',0);
console.log(cuentaDeAxel);
console.log('******')
console.log(cuentaDeAhorroAxel);