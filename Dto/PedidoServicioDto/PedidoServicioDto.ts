class Pedido {
    private _id_servicio: number | null;
    private _id_factura: number | null;
    private _informacion_pedido: string;
    private _estado_pedido: string;

    constructor(
        id_servicio: number | null,
        id_factura: number | null,
        informacion_pedido: string,
        estado_pedido: string
    ) {
        this._id_servicio = id_servicio;
        this._id_factura = id_factura;
        this._informacion_pedido = informacion_pedido;
        this._estado_pedido = estado_pedido;
    }

    // Getters
    get id_servicio(): number | null {
        return this._id_servicio;
    }

    get id_factura(): number | null {
        return this._id_factura;
    }

    get informacion_pedido(): string {
        return this._informacion_pedido;
    }


    get estado_pedido(): string {
        return this._estado_pedido;
    }

    // Setters
    set id_servicio(id_servicio: number | null) {
        this._id_servicio = id_servicio;
    }

    set id_factura(id_factura: number | null) {
        this._id_factura = id_factura;
    }

    set informacion_pedido(informacion_pedido: string) {
        this._informacion_pedido = informacion_pedido;
    }

    set estado_pedido(estado_pedido : string){
        this._estado_pedido = estado_pedido;
    }

    
}

export default Pedido;