class CarritoServicio {
    private _id_carrito: number;
    private _id_servicio: number;

    constructor(
        id_carrito: number,
        id_servicio: number
    ) {
        this._id_carrito = id_carrito;
        this._id_servicio = id_servicio;
    }

    // Getters
    get id_carrito(): number {
        return this._id_carrito;
    }

    get id_servicio(): number {
        return this._id_servicio;
    }

    // Setters
    set id_carrito(id_carrito: number) {
        this._id_carrito = id_carrito;
    }

    set id_servicio(id_servicio: number) {
        this._id_servicio = id_servicio;
    }
}

export default CarritoServicio;