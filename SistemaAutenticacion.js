export class SistemaAutenticacion{
    // funcion comun para todas las clases: static
    static login(usuario,clave){
        return usuario.autenticable(clave);
    }
}