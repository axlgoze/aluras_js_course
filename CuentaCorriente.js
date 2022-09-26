// import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
	static cantidadCuentas = 0;
	// se debe llamar al constructor padre con la palabra super
	constructor(cliente,numero,agencia) {
		super(cliente,numero,agencia,0);
		CuentaCorriente.cantidadCuentas++;
	}

	retiro(valor){
		super._retiro(valor,5);
	}
}