export class CuentaAhorro{
    #cliente;
    #saldo;
    //constuir la pieza
    constructor(cliente,numero,agencia,saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente=cliente;
        this.#saldo=saldo;
    }

    
deposito(valor){
    //	cuentaCorriente2.saldo = cuentaCorriente2.saldo+valor;
    //	this.saldo = this.saldo+valor;
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo
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
}