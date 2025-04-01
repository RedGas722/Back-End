class Pedido {
    private _fecha_pedido: Date | null;
    private _informacion_pedido: string;
    private _cantidad_productos: number;
    private _estado_pedido: string;
    private _id_cliente: number | null;

    constructor(
        fecha_pedido: Date | null,
        informacion_pedido: string,
        cantidad_productos: number,
        estado_pedido: string,
        id_cliente: number | null
    ) {
        this._fecha_pedido = fecha_pedido;
        this._informacion_pedido = informacion_pedido;
        this._cantidad_productos = cantidad_productos;
        this._estado_pedido = estado_pedido;
        this._id_cliente = id_cliente;
    }

    // Getters
    get fecha_pedido(): Date | null {
        return this._fecha_pedido;
    }

    get informacion_pedido(): string {
        return this._informacion_pedido;
    }

    get cantidad_productos(): number {
        return this._cantidad_productos;
    }

    get estado_pedido(): string {
        return this._estado_pedido;
    }

    get id_cliente(): number | null {
        return this._id_cliente;
    }

    // Setters
    set fecha_pedido(fecha_pedido: Date | null) {
        this._fecha_pedido = fecha_pedido;
    }

    set informacion_pedido(informacion_pedido: string) {
        this._informacion_pedido = informacion_pedido;
    }

    set cantidad_productos(cantidad_productos: number) {
        this._cantidad_productos = cantidad_productos;
    }

    set estado_pedido(estado_pedido : string){
        this._estado_pedido = estado_pedido;
    }

    set id_cliente(id_cliente: number | null) {
        this._id_cliente = id_cliente;
    }
}

export default Pedido;