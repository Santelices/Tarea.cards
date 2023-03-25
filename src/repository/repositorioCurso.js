export class RepositorioCurso{
  constructor() {
    this.estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
  }

  agregarEstudiante(estudiante) {
    if (!this.estudiantes) {
      this.estudiantes = [];
    }
    this.estudiantes.push(estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
  }

  obtenerEstudiantes() {
    return this.estudiantes;
  }

  obtenerEstudiantePorMatricula(matricula) {
    return this.estudiantes.find(estudiante => estudiante.matricula === matricula);
  }
  editarEstudiante(estudiante, nuevaNota) {
    const indiceEstudiante = this.estudiantes.findIndex(est => est.matricula === estudiante.matricula);
    if (indiceEstudiante !== -1) {
      this.estudiantes[indiceEstudiante].nota = nuevaNota;
      localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
    }
  }
  eliminarEstudiante(matricula) {
    const indiceEstudiante = this.estudiantes.findIndex(estudiante => estudiante.matricula === matricula);
    if (indiceEstudiante !== -1) {
      this.estudiantes.splice(indiceEstudiante, 1);
      localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
    }
  }
}