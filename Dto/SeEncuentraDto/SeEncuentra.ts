class SeEncuentra {
    private _id_categoria: number;
    private _id_producto: number;

    constructor(
        id_categoria: number,
        id_producto: number
    ) {
        this._id_categoria = id_categoria;
        this._id_producto = id_producto;
    }

    // Getters
    get id_producto(): number {
        return this._id_producto;
    }

    get id_categoria(): number {
        return this._id_categoria;
    }

    // Setters
    set id_producto(id_producto: number) {
        this._id_producto = id_producto;
    }

    set id_categoria(id_categoria: number) {
        this._id_categoria = id_categoria;
    }
}

export default SeEncuentra;
