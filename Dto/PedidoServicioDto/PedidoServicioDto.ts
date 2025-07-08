class Pedido {
    private _id_cliente: number | null;
    private _id_tecnico: number | null;
    private _total: number | null;
    private _descripcion: string | null;
    private _estado_pedido: string;

    constructor(
        id_cliente: number | null,
        id_tecnico: number | null,
        total: number | null,
        descripcion: string | null,
        estado_pedido: string
    ) {
        this._id_cliente = id_cliente;
        this._id_tecnico = id_tecnico;
        this._total = total;
        this._descripcion = descripcion;
        this._estado_pedido = estado_pedido;
    }

    // Getters
    get id_cliente(): number | null {
        return this._id_cliente;
    }

    get id_tecnico(): number | null {
        return this._id_tecnico;
    }

    get total(): number | null {
        return this._total;
    }

    get descripcion(): string | null {
        return this._descripcion;
    }

    get estado_pedido(): string {
        return this._estado_pedido;
    }

    // Setters
    set id_cliente(id_cliente: number | null) {
        this._id_cliente = id_cliente;
    }

    set id_tecnico(id_tecnico: number | null) {
        this._id_tecnico = id_tecnico;
    }

    set total(total: number | null) {
        this._total = total;
    }

    set descripcion(descripcion: string | null) {
        this._descripcion = descripcion;
    }

    set estado_pedido(estado_pedido: string) {
        this._estado_pedido = estado_pedido;
    }
}

export default Pedido;