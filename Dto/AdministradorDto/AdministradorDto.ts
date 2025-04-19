class Admin {
    private _nombre_admin: string;
    private _correo_admin: string;
    private _telefono_admin: string;
    private _contraseña_admin: string;

    constructor(
        nombre_admin: string,
        correo_admin: string,
        telefono_admin: string,
        contraseña_admin: string
    ) {
        this._nombre_admin = nombre_admin;
        this._correo_admin = correo_admin;
        this._telefono_admin = telefono_admin;
        this._contraseña_admin = contraseña_admin;
    }

    // Getters
    get nombre_admin(): string {
        return this._nombre_admin;
    }

    get correo_admin(): string {
        return this._correo_admin;
    }

    get telefono_admin(): string {
        return this._telefono_admin;
    }

    get contraseña_admin(): string {
        return this._contraseña_admin;
    }

    // Setters
    set nombre_admin(nombre_admin: string) {
        this._nombre_admin = nombre_admin;
    }

    set correo_admin(correo_admin: string) {
        this._correo_admin = correo_admin;
    }

    set telefono_admin(telefono_admin: string) {
        this._telefono_admin = telefono_admin;
    }

    set contraseña_admin(contraseña_admin: string) {
        this._contraseña_admin = contraseña_admin;
    }
}

export default Admin;