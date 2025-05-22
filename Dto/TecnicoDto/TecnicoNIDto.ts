class TecnicoNI {
  private _nombre_tecnico: string;
  private _correo_tecnico: string;
  private _telefono_tecnico: string;

  constructor(nombre_tecnico: string, correo_tecnico: string, telefono_tecnico: string) {
    this._nombre_tecnico = nombre_tecnico;
    this._correo_tecnico = correo_tecnico;
    this._telefono_tecnico = telefono_tecnico;
  }

  // Getters
  get nombre_tecnico(): string {
    return this._nombre_tecnico;
  }

  get correo_tecnico(): string {
    return this._correo_tecnico;
  }

  get telefono_tecnico(): string {
    return this._telefono_tecnico;
  }

  // Setters
  set nombre_tecnico(nombre_tecnico: string) {
    this._nombre_tecnico = nombre_tecnico;
  }

  set correo_tecnico(correo_tecnico: string) {
    this._correo_tecnico = correo_tecnico;
  }

  set telefono_tecnico(telefono_tecnico: string) {
    this._telefono_tecnico = telefono_tecnico;
  }
}

export default TecnicoNI;
