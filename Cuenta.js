// import { CuentaCorriente } from "./CuentaCorriente";

export class Cuenta{
    #cliente;
    #saldo;
    //constuir la pieza
    constructor(cliente,numero,agencia,saldo){
        // this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente=cliente;
        this.#saldo=saldo;
    }

    
	set cliente(valor){
		if(valor instanceof Cliente)
			this.#cliente=valor;
	}

	get cliente(){
		return this.#cliente;
	}

    
    deposito(valor){
        //	cuentaCorriente2.saldo = cuentaCorriente2.saldo+valor;
        //	this.saldo = this.saldo+valor;
            if(valor > 0)
                this.#saldo += valor;
            return this.#saldo
        }
            
        retiro(valor){
            if(valor < 0)
                console.log("No puedes retirar negativos")
            else if(valor <= this.#saldo)
                this.#saldo -= valor;

            // if(this.tipo == 'Corriente')
            //     valor = valor*1.05;
            // else if (this.tipo == 'Ahorro')
            //     valor = valor*1.02;
                
            return this.#saldo;
        }
        
        verSaldo(){
            return this.#saldo;
        }
        
        transferirCuenta(valor,cuentaDestino){
            this.retiro(valor);
            cuentaDestino.deposito(valor);
        }
}