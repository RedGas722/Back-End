class AuthEmpleado {
    private _correo_empleado: string;
    private _contraseña_empleado: string;

    constructor(correo_empleado: string, contraseña_empleado: string) {
        this._correo_empleado = correo_empleado;
        this._contraseña_empleado = contraseña_empleado;
    }

    // Getters
    get correo_empleado(): string {
        return this._correo_empleado;
    }

    get contraseña_empleado(): string {
        return this._contraseña_empleado;
    }

    // Setters
    set correo_empleado(correo_empleado: string) {
        this._correo_empleado = correo_empleado;
    }

    set contraseña_empleado(contraseña_empleado: string) {
        this._contraseña_empleado = contraseña_empleado;
    }
}

export default AuthEmpleado;