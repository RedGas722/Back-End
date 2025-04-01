class AuthTecnico {
    private _correo: string;
    private _contraseña_tecnico: string;

    constructor(correo: string, contraseña_tecnico: string) {
        this._correo = correo;
        this._contraseña_tecnico = contraseña_tecnico;
    }

    // Getters
    get correo(): string {
        return this._correo;
    }

    get contraseña_tecnico(): string {
        return this._contraseña_tecnico;
    }

    // Setters
    set correo(correo: string) {
        this._correo = correo;
    }

    set contraseña_tecnico(contraseña_tecnico: string) {
        this._contraseña_tecnico = contraseña_tecnico;
    }
}

export default AuthTecnico;
