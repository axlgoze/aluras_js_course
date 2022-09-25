export class Cliente{
	nombreCliente;
	dniCliente;
	rfcCliente;

	constructor(nombreCliente,dniCliente, rfcCliente){
		this.nombreCliente= nombreCliente;
		this.dniCliente = dniCliente;
		this.rfcCliente= rfcCliente;
	}
}

// //Creando un cliente o instancia del molde cliente
// const cliente1 = new Cliente();

// //una instancia no tiene variables tienen atributos o propiedades
// cliente1.nombreCliente = "José";
// cliente1.dniCliente = 123;
// cliente1.numeroCuenta = 1234;
// cliente1.saldoCuenta = 10000;

// const cliente2 = new Cliente();
// cliente2.nombreCliente = "Josefina";
// cliente2.dniCliente = 123123;
// cliente2.numeroCuenta = 12341234;
// cliente2.saldoCuenta = 40000;
