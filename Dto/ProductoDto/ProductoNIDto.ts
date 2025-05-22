class ProductoNI {
    private _nombre_producto: string;
    private _descripcion_producto: string;
    private _precio_producto: number;
    private _stock: number;

    constructor(
        nombre_producto: string,
        descripcion_producto: string,
        precio_producto: number,
        stock: number,
    ) {
        this._nombre_producto = nombre_producto;
        this._descripcion_producto = descripcion_producto;
        this._precio_producto = precio_producto;
        this._stock = stock;
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
}

export default ProductoNI;
