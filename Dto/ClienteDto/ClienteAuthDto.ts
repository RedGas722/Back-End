class AuthCliente {
    private _correo_cliente: string;
    private _contraseña_cliente: string
    constructor(
        correo_cliente: string,
        contraseña_cliente: string
    ) {
        this._correo_cliente = correo_cliente;
        this._contraseña_cliente = contraseña_cliente;
    }
    // Getters
    get correo_cliente(): string {
        return this._correo_cliente;
    }

    get contraseña_cliente(): string {
        return this._contraseña_cliente;
    }

    // Setters
    set correo_cliente(correo_cliente: string) {
        this._correo_cliente = correo_cliente
    }

    set contraseña_cliente(contraseña_cliente: string) {
        this._contraseña_cliente = contraseña_cliente;
    }

}

export default AuthCliente;