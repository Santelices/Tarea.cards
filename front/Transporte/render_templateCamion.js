export class RenderTemplate {
  constructor(camiones, tabla ) {
    this.camiones = camiones
    this.tabla = tabla
  }
  
  render() {
    const items = this.camiones.map(camion => {
      return `
        <tr>
          <td>${camion.matricula}</td>
          <td>${camion.capacidadCarga}</td>
          <td>${camion.consumoGasolina}</td>
          <td>${camion.cargaActual}</td>
          <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-cargar"="${camion.cargaActual}">Cargar</a>
                    <a class="dropdown-item" href="#" rel="accion-descargar"="${camion.cargaActual}">Descargar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
    }).join('')
  
    return items
  
   }
  renderizarTabla() {
    this.tabla.innerHTML = this.render()
  }
}

