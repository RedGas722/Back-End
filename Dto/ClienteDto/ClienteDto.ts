class Cliente {
    private _nombre_cliente: string;
    private _correo_cliente: string;
    private _telefono_cliente: string;
    private _contraseña_cliente: string;

    constructor(
        nombre_cliente: string,
        correo_cliente: string,
        telefono_cliente: string,
        contraseña_cliente: string
    ) {
        this._nombre_cliente = nombre_cliente;
        this._correo_cliente = correo_cliente;
        this._telefono_cliente = telefono_cliente;
        this._contraseña_cliente = contraseña_cliente;
    }

    // Getters
    get nombre_cliente(): string {
        return this._nombre_cliente;
    }

    get correo_cliente(): string {
        return this._correo_cliente;
    }

    get telefono_cliente(): string {
        return this._telefono_cliente;
    }

    get contraseña_cliente(): string {
        return this._contraseña_cliente;
    }

    // Setters
    set nombre_cliente(nombre_cliente: string) {
        this._nombre_cliente = nombre_cliente;
    }

    set correo_cliente(correo_cliente: string) {
        this._correo_cliente = correo_cliente;
    }

    set telefono_cliente(telefono_cliente: string) {
        this._telefono_cliente = telefono_cliente;
    }

    set contraseña_cliente(contraseña_cliente: string) {
        this._contraseña_cliente = contraseña_cliente;
    }
}

export default Cliente;