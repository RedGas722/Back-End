class Tecnico {

    private _nombre_tecnico: string;
    private _correo: string;
    private _telefono: string;
    private _direccion_tecnico: string;
    private _contraseña_tecnico: string;

    constructor(
        nombre_tecnico: string,
        correo: string,
        telefono: string,
        direccion_tecnico: string,
        contraseña_tecnico: string
    ) {
        this._nombre_tecnico = nombre_tecnico;
        this._correo = correo;
        this._telefono = telefono;
        this._direccion_tecnico = direccion_tecnico;
        this._contraseña_tecnico = contraseña_tecnico;
    }

    // Getters
    get nombre_tecnico(): string {
        return this._nombre_tecnico;
    }

    get correo(): string {
        return this._correo;
    }

    get telefono(): string {
        return this._telefono;
    }

    get direccion_tecnico(): string {
        return this._direccion_tecnico;
    }

    get contraseña_tecnico(): string {
        return this._contraseña_tecnico;
    }

    // Setters
    set nombre_tecnico(nombre_tecnico: string) {
        this._nombre_tecnico = nombre_tecnico;
    }

    set correo(correo: string) {
        this._correo = correo;
    }

    set telefono(telefono: string) {
        this._telefono = telefono;
    }

    set direccion_tecnico(direccion_tecnico: string) {
        this._direccion_tecnico = direccion_tecnico;
    }

    set contraseña_tecnico(contraseña_tecnico: string) {
        this._contraseña_tecnico = contraseña_tecnico;
    }

}

export default Tecnico;
