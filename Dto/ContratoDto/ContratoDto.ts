class Contrato {
    private _fecha_contrato: Date | null;
    private _duracion_contrato: number | null;
    private _tipo_contrato: string | null;
    private _salario: number;
    private _id_admin: number | null;
    private _id_empleado: number | null;

    constructor(
        fecha_contrato: Date | null,
        duracion_contrato: number | null,
        tipo_contrato: string | null,
        salario: number,
        id_admin: number | null,
        id_empleado: number | null
    ) {
        this._fecha_contrato = fecha_contrato;
        this._duracion_contrato = duracion_contrato;
        this._tipo_contrato = tipo_contrato;
        this._salario = salario;
        this._id_admin = id_admin;
        this._id_empleado = id_empleado;
    }

    // Getters
    get fecha_contrato(): Date | null {
        return this._fecha_contrato;
    }

    get duracion_contrato(): number | null {
        return this._duracion_contrato;
    }

    get tipo_contrato(): string | null {
        return this._tipo_contrato;
    }

    get salario(): number {
        return this._salario;
    }

    get id_admin(): number | null {
        return this._id_admin;
    }

    get id_empleado(): number | null {
        return this._id_empleado;
    }

    // Setters
    set fecha_contrato(fecha_contrato: Date | null) {
        this._fecha_contrato = fecha_contrato;
    }

    set duracion_contrato(duracion_contrato: number | null) {
        this._duracion_contrato = duracion_contrato;
    }

    set tipo_contrato(tipo_contrato: string | null) {
        this._tipo_contrato = tipo_contrato;
    }

    set salario(salario: number) {
        this._salario = salario;
    }

    set id_admin(id_admin: number | null) {
        this._id_admin = id_admin;
    }

    set id_empleado(id_empleado: number | null) {
        this._id_admin = id_empleado;
    }
}

export default Contrato;