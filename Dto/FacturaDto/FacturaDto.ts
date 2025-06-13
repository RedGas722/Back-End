class Factura {
    private _fecha_factura: Date | null;
    private _id_cliente: number | null;
    private _id_empleado: number | null;
    private _total: number | null;

    constructor(
        fecha_factura: Date | null,
        id_cliente: number | null,
        id_empleado: number | null,
        total: number | 0
    ) {
        this._fecha_factura = fecha_factura;
        this._id_cliente = id_cliente;
        this._id_empleado = id_empleado;
        this._total = total;
    }

    // Getters
    get fecha_factura(): Date | null {
        return this._fecha_factura;
    }

    get id_cliente(): number | null {
        return this._id_cliente;
    }

    get id_empleado(): number | null {
        return this._id_empleado;
    }

    get total(): number | null {
        return this._total;
    }

    // Setters
    set fecha_factura(fecha_factura: Date | null) {
        this._fecha_factura = fecha_factura;
    }

    set id_cliente(id_cliente: number | null) {
        this._id_cliente = id_cliente;
    }

    set id_empleado(id_empleado: number | null) {
        this._id_empleado = id_empleado;
    }

    set total(total: number | null) {
        this._total = total;
    }
}

export default Factura;