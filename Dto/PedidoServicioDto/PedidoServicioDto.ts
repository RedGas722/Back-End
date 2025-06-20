class Pedido {
    private _id_servicio: number | null;
    private _id_cliente: number | null;
    private _id_tecnico: number | null;
    private _estado_pedido: string;

    constructor(
        id_servicio: number | null,
        id_cliente: number | null,
        id_tecnico: number | null,
        estado_pedido: string
    ) {
        this._id_servicio = id_servicio;
        this._id_cliente = id_cliente;
        this._id_tecnico = id_tecnico;
        this._estado_pedido = estado_pedido;
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

    get estado_pedido(): string {
        return this._estado_pedido;
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

    set estado_pedido(estado_pedido: string) {
        this._estado_pedido = estado_pedido;
    }


}

export default Pedido;