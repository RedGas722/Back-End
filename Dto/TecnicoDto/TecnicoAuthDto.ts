class AuthTecnico {
    private _correo_tecnico: string;
    private _contraseña_tecnico: string;

    constructor(correo_tecnico: string, contraseña_tecnico: string) {
        this._correo_tecnico = correo_tecnico;
        this._contraseña_tecnico = contraseña_tecnico;
    }

    // Getters
    get correo_tecnico(): string {
        return this._correo_tecnico;
    }

    get contraseña_tecnico(): string {
        return this._contraseña_tecnico;
    }

    // Setters
    set correo_tecnico(correo_tecnico: string) {
        this._correo_tecnico = correo_tecnico;
    }

    set contraseña_tecnico(contraseña_tecnico: string) {
        this._contraseña_tecnico = contraseña_tecnico;
    }
}

export default AuthTecnico;
