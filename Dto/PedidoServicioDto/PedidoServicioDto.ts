class Pedido {
    private _id_servicio: number | null;
    private _id_cliente: number | null;
    private _id_tecnico: number | null;
    private _firma: Buffer;

    constructor(
        id_servicio: number | null,
        id_cliente: number | null,
        id_tecnico: number | null,
        firma: Buffer
    ) {
        this._id_servicio = id_servicio;
        this._id_cliente = id_cliente;
        this._id_tecnico = id_tecnico;
        this._firma = firma;
    }

    // Getters
    get id_servicio(): number | null {
        return this._id_servicio;
    }

    get id_cliente(): number | null {
        return this._id_cliente;
    }

    get id_tecnico(): number | null {
        return this._id_tecnico;
    }

    get firma(): Buffer {
        return this._firma;
    }

    // Setters
    set id_servicio(id_servicio: number | null) {
        this._id_servicio = id_servicio;
    }

    set id_cliente(id_cliente: number | null) {
        this._id_cliente = id_cliente;
    }

    set id_tecnico(id_tecnico: number | null) {
        this._id_tecnico = id_tecnico;
    }

    set firma(firma: Buffer) {
        this._firma = firma;
    }


}

export default Pedido;