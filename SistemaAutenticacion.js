export class SistemaAutenticacion{
    // funcion comun para todas las clases: static
    static login(empleado,clave){
        return empleado.clave == clave;
    }
}