class ContratoDataDto {
    private _fecha_contrato: string;
    private _duracion_contrato: string;
    private _tipo_contrato: string;
    private _salario: number;

    constructor(fecha_contrato: string, duracion_contrato: string, tipo_contrato: string, salario: number) {
        this._fecha_contrato = fecha_contrato;
        this._duracion_contrato = duracion_contrato;
        this._tipo_contrato = tipo_contrato;
        this._salario = salario;
    }

    // Getters
    get fecha_contrato(): string {
        return this._fecha_contrato;
    }
    get duracion_contrato(): string {
        return this._duracion_contrato;
    }
    get tipo_contrato(): string {
        return this._tipo_contrato;
    }
    get salario(): number {
        return this._salario;
    }

    // Setters
    set fecha_contrato(value: string) {
        this._fecha_contrato = value;
    }
    set duracion_contrato(value: string) {
        this._duracion_contrato = value;
    }
    set tipo_contrato(value: string) {
        this._tipo_contrato = value;
    }
    set salario(value: number) {
        this._salario = value;
    }
}

export default ContratoDataDto;
