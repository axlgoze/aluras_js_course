import { Cliente } from "./Cliente.js";
export class CuentaCorriente{
	#cliente;
	numero;
	agencia;
	#saldo;
	static cantidadCuentas = 0;

	set cliente(valor){
		if(valor instanceof Cliente)
			this.#cliente=valor;
	}

	get cliente(){
		return this.#cliente;
	}
// saldo por definicion inicia con 0
constructor(cliente,numero,agencia){
	// buena practica: no tener valores undefined
	// this.#cliente = null;
		this.cliente = cliente;
		this.numero = numero;
		this.agencia = agencia;
		this.#saldo=0;
		CuentaCorriente.cantidadCuentas++;
	}

deposito(valor){
//	cuentaCorriente2.saldo = cuentaCorriente2.saldo+valor;
//	this.saldo = this.saldo+valor;
	if(valor > 0)
		this.#saldo += valor;
	// return this.#saldo
}
	
retiro(valor){
	if(valor < 0){
		// return this.#saldo;
		console.log("No puedes retirar negativos")
	}else if(valor <this.#saldo){
		this.#saldo -= valor;
	}
    return this.#saldo
}

verSaldo(){
	return this.#saldo;
}

transferirCuenta(valor,cuentaDestino){
	this.retiro(valor);
	cuentaDestino.deposito(valor);
}

}//fin de clase