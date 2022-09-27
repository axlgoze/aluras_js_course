export class SistemaAutenticacion{
    // funcion comun para todas las clases: static
    static login(usuario,clave){
        if ("autenticable" in usuario)
            return usuario.autenticable(clave);
        else
            return false;
        }
}