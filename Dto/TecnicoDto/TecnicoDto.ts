class Tecnico {

    private _cc: number;
    private _nombre_tecnico: string;
    private _correo_tecnico: string;
    private _telefono_tecnico: string;
    private _contraseña_tecnico: string;
    private _imagen: Buffer;

    constructor(
        cc: number,
        nombre_tecnico: string,
        correo_tecnico: string,
        telefono_tecnico: string,
        contraseña_tecnico: string,
        imagen: Buffer
    ) {
        this._cc = cc;
        this._nombre_tecnico = nombre_tecnico;
        this._correo_tecnico = correo_tecnico;
        this._telefono_tecnico = telefono_tecnico;
        this._contraseña_tecnico = contraseña_tecnico;
        this._imagen = imagen;
    }

    // Getters

    get cc(): number {
        return this._cc;
    }

    get nombre_tecnico(): string {
        return this._nombre_tecnico;
    }

    get correo_tecnico(): string {
        return this._correo_tecnico;
    }

    get telefono_tecnico(): string {
        return this._telefono_tecnico;
    }

    get contraseña_tecnico(): string {
        return this._contraseña_tecnico;
    }

    get imagen():Buffer {
        return this._imagen;
    }

    // Setters

    set cc(cc: number) {
        this._cc = cc;
    }

    set nombre_tecnico(nombre_tecnico: string) {
        this._nombre_tecnico = nombre_tecnico;
    }

    set correo_tecnico(correo_tecnico: string) {
        this._correo_tecnico = correo_tecnico;
    }

    set telefono_tecnico(telefono_tecnico: string) {
        this._telefono_tecnico = telefono_tecnico;
    }

    set contraseña_tecnico(contraseña_tecnico: string) {
        this._contraseña_tecnico = contraseña_tecnico;
    }

    set imagen(imagen: Buffer) {
        this._imagen = imagen;
    }
}

export default Tecnico;
