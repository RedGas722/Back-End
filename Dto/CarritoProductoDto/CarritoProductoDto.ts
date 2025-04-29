class CarritoProducto {
    private _id_carrito: number;
    private _id_producto: number;

    constructor(
        id_carrito: number,
        id_producto: number
    ) {
        this._id_carrito = id_carrito;
        this._id_producto = id_producto;
    }

    // Getters
    get id_carrito(): number {
        return this._id_carrito;
    }

    get id_producto(): number {
        return this._id_producto;
    }

    // Setters
    set id_carrito(id_carrito: number) {
        this._id_carrito = id_carrito;
    }

    set id_producto(id_producto: number) {
        this._id_producto = id_producto;
    }
}

export default CarritoProducto;