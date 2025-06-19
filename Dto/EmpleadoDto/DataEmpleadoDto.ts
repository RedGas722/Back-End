class DataEmpleado {
    private _cc: number;
    private _nombre_empleado: string;
    private _correo_empleado: string;
    private _telefono_empleado: string;
    private _direccion_empleado: string;

    constructor(
        cc: number,
        nombre_empleado: string,
        correo_empleado: string,
        telefono_empleado: string,
        direccion_empleado: string,
    ) {
        this._cc = cc;
        this._nombre_empleado = nombre_empleado;
        this._correo_empleado = correo_empleado;
        this._telefono_empleado = telefono_empleado;
        this._direccion_empleado = direccion_empleado;
    }

    // Getters
  
    get cc(): number {
        return this._cc;
    }

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


    // Setters
 
    set cc(cc: number) {
        this._cc = cc;
    }

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

}

export default DataEmpleado;