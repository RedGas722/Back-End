class Pedido {
    private _id_producto: number | null;
    private _id_factura: number | null;
    private _cantidad_producto: number;
    private _estado_pedido: string;

    constructor(
        id_producto: number | null,
        id_factura: number | null,
        cantidad_producto: number,
        estado_pedido: string
    ) {
        this._id_producto = id_producto;
        this._id_factura = id_factura;
        this._cantidad_producto = cantidad_producto;
        this._estado_pedido = estado_pedido;
    }

    // Getters
    get id_producto(): number | null {
        return this._id_producto;
    }

    get id_factura(): number | null {
        return this._id_factura;
    }

    get cantidad_producto(): number {
        return this._cantidad_producto;
    }

    get estado_pedido(): string {
        return this._estado_pedido;
    }

    // Setters
    set id_producto(id_producto: number | null) {
        this._id_producto = id_producto;
    }

    set id_factura(id_factura: number | null) {
        this._id_factura = id_factura;
    }

    set cantidad_producto(cantidad_producto: number) {
        this._cantidad_producto = cantidad_producto;
    }

    set estado_pedido(estado_pedido : string){
        this._estado_pedido = estado_pedido;
    }

    
}

export default Pedido;