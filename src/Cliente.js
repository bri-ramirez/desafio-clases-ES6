class Cliente {
  // el contructor asignara las propiedades de nombre y el porcentaje (por defecto será 21%)
  constructor(nombre, porcentaje = 0.21) {
    this._nombre = nombre;
    this._porcentaje = porcentaje;
  }

  set impuesto(impuesto) {
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  calcularImpuesto() {
    // retorna el resultado del calculo del impuesto
    return (
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) *
      this._porcentaje
    );
  }
}

export default Cliente;
