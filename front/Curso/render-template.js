export class RenderTemplate {
  constructor(curso, tabla ) {
    this.curso = curso
    this.tabla = tabla
  }
  
  render() {
    const items = this.curso.map(estudiante => {
      return `
        <tr>
          <td>${estudiante.matricula}</td>
          <td>${estudiante.nombre}</td>
          <td>${estudiante.nota}</td>
        </tr>
      `
    }).join('')
  
    return items
  
   }
  renderizarTabla() {
    this.tabla.innerHTML = this.render()
  }
}