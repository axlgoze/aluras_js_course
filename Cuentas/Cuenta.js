// import { CuentaCorriente } from "./CuentaCorriente";

export class Cuenta{
    #cliente;
    #saldo;
    //constuir la pieza
    constructor(cliente,numero,agencia,saldo){
        if(this.constructor == Cuenta){
            throw new Error("No se debe instanciar objetos de la clase cuenta");
        }
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
            // metodo abstracto
            throw new Error("Debe implementar el método retirar de cuenta en su clase");
        }
        // metodo privado
        _retiro(valor,comision){
            valor = valor*(1+comision/100);
            if(valor < 0)
                console.log("No puedes retirar negativos")
            else if(valor <= this.#saldo)
                this.#saldo -= valor;       
            return this.#saldo;
        }
        
        verSaldo(){
            return this.#saldo;
        }
        
        transferirCuenta(valor,cuentaDestino){
            this.retiro(valor);
            cuentaDestino.deposito(valor);
        }

        prueba(){
            console.log("Método padre");
        }
}