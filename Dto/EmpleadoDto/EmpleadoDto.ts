class Empleado {
   
    private _nombre_empleado: string;
    private _correo_empleado: string;
    private _telefono_empleado: string;
    private _direccion_empleado: string;
    private _contraseña_empleado: string;

    constructor(
       
        nombre_empleado: string,
        correo_empleado: string,
        telefono_empleado: string,
        direccion_empleado: string,
        contraseña_empleado: string
    ) {
       
        this._nombre_empleado = nombre_empleado;
        this._correo_empleado = correo_empleado;
        this._telefono_empleado = telefono_empleado;
        this._direccion_empleado = direccion_empleado;
        this._contraseña_empleado = contraseña_empleado;
    }

    // Getters
  

    get nombre_empleado(): string {
        return this._nombre_empleado;
    }

    get correo_empleado(): string {
        return this._correo_empleado;
    }

    get telefono_empleado(): string {
        return this._telefono_empleado;
    }

    get direccion_empleado(): string {
        return this._direccion_empleado;
    }

    get contraseña_empleado(): string {
        return this._contraseña_empleado;
    }

    // Setters
 

    set nombre_empleado(nombre_empleado: string) {
        this._nombre_empleado = nombre_empleado;
    }

    set correo_empleado(correo_empleado: string) {
        this._correo_empleado = correo_empleado;
    }

    set telefono_empleado(telefono_empleado: string) {
        this._telefono_empleado = telefono_empleado;
    }

    set direccion_empleado(direccion_empleado: string) {
        this._direccion_empleado = direccion_empleado;
    }

    set contraseña_empleado(contraseña_empleado: string) {
        this._contraseña_empleado = contraseña_empleado;
    }
}

export default Empleado;