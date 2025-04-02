class Factura {
    private _fecha_factura: Date | null;
    private _estado_factura: string | null;
    private _total: number | null;
    private _id_pedido: number | null;
    private _id_empleado: number | null;

    constructor(
        fecha_factura: Date | null,
        estado_factura: string | null,
        total: number | null,
        id_pedido: number | null,
        id_empleado: number | null
    ) {
        this._fecha_factura = fecha_factura;
        this._estado_factura = estado_factura;
        this._total = total;
        this._id_pedido = id_pedido;
        this._id_empleado = id_empleado;
    }

    // Getters
    get fecha_factura(): Date | null {
        return this._fecha_factura;
    }

    get estado_factura(): string | null {
        return this._estado_factura;
    }

    get total(): number | null {
        return this._total;
    }

    get id_pedido(): number | null {
        return this._id_pedido;
    }

    get id_empleado(): number | null {
        return this._id_empleado;
    }

    // Setters
    set fecha_factura(fecha_factura: Date | null) {
        this._fecha_factura = fecha_factura;
    }

    set estado_factura(estado_factura: string | null) {
        this._estado_factura = estado_factura;
    }

    set total(total: number | null) {
        this._total = total;
    }

    set id_pedido(id_pedido: number | null) {
        this._id_pedido = id_pedido;
    }

    set id_empleado(id_empleado: number | null) {
        this._id_empleado = id_empleado;
    }
}

export default Factura;