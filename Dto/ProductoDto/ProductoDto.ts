class Producto {
    private _nombre_producto: string;
    private _descripcion_producto: string;
    private _precio_producto: number;
    private _stock: number;
    private _descuento: number;
    private _fecha_descuento: Date;
    private _imagen: Buffer;

    constructor(
        nombre_producto: string,
        descripcion_producto: string,
        precio_producto: number,
        stock: number,
        descuento: number,
        fecha_descuento: Date,
        imagen: Buffer
    ) {
        this._nombre_producto = nombre_producto;
        this._descripcion_producto = descripcion_producto;
        this._precio_producto = precio_producto;
        this._stock = stock;
        this._descuento = descuento;
        this._fecha_descuento = fecha_descuento;
        this._imagen = imagen;
    }

    // Getters
    get nombre_producto(): string {
        return this._nombre_producto;
    }

    get descripcion_producto(): string {
        return this._descripcion_producto;
    }

    get precio_producto(): number {
        return this._precio_producto;
    }

    get stock(): number {
        return this._stock
    }

    get descuento(): number {
        return this._descuento;
    }

    get fecha_descuento(): Date {
        return this._fecha_descuento;
    }

    get imagen(): Buffer {
        return this._imagen;
    }

    // Setters
    set nombre_producto(nombre_producto: string) {
        this._nombre_producto = nombre_producto;
    }

    set descripcion_producto(descripcion_producto: string) {
        this._descripcion_producto = descripcion_producto;
    }

    set precio_producto(precio_producto: number) {
        this._precio_producto = precio_producto;
    }

    set stock(stock: number) {
        this._stock = stock;
    }

    set descuento(descuento: number) {
        this._descuento = descuento;
    }

    set fecha_descuento(fecha_descuento: Date) {
        this._fecha_descuento = fecha_descuento;
    }

    set imagen(imagen: Buffer) {
        this._imagen = imagen;
    }
}

export default Producto;
