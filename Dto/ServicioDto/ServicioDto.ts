class Servicio {
    private _nombre_servicio: string;
    private _descripcion_servicio: string;
    private _precio_servicio: number;
    private _precio_total: number;

    constructor(
        nombre_servicio: string,
        descripcion_servicio: string,
        precio_servicio: number,
        precio_total: number
    ) {
        this._nombre_servicio = nombre_servicio;
        this._descripcion_servicio = descripcion_servicio;
        this._precio_servicio = precio_servicio;
        this._precio_total = precio_total;
    }
  
     // Getters
     get nombre_servicio(): string {
        return this._nombre_servicio;
    }

    get descripcion_servicio(): string {
        return this._descripcion_servicio;
    }

    get precio_servicio(): number {
        return this._precio_servicio;
    }

    get precio_total(): number {
        return this._precio_total;
    }

    // Setters
    set nombre_servicio(nombre_servicio: string) {
        this._nombre_servicio = nombre_servicio;
    }

    set descripcion_servicio(descripcion_servicio: string) {
        this._descripcion_servicio = descripcion_servicio;
    }

    set precio_servicio(precio_servicio: number) {
        this._precio_servicio = precio_servicio;
    }

    set precio_total(precio_total: number) {
        this._precio_total = precio_total;
    }
}
  
  export default Servicio;
  