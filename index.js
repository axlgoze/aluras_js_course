// importacion de clases
import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Axel','1234543','1231231');
const cliente2 = new Cliente('María','1236544','1233281');

const empleado = new Empleado ('Juan Perez', '123',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas', '456', 12000);
gerente.asignarClave('54321');
console.log(SistemaAutenticacion.login(gerente,'54321'));

const director = new Director('Elena Moreno','789', 15000);
director.asignarClave('67890');
console.log(SistemaAutenticacion.login(director,'67890'));