// importacion de clases
import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
// import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
// import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
// import { Cuenta } from './Cuenta.js';
// import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';

//Creacion de instancias
// creacion de clientes
const cliente = new Cliente('Axel','1234543','1231231');
const cliente2 = new Cliente('María','1236544','1233281');

const empleado = new Empleado ('Juan Perez', '123',10000);
const gerente = new Gerente('Pedro Rivas', '456', 12000);
const director = new Director('Elena Moreno','789', 15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());