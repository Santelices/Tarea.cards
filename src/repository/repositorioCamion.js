export class RepositorioCamion {
    constructor() {
      this.camiones = JSON.parse(localStorage.getItem('camiones')) || [];
    }
  
    agregarCamion(camion) {
      if (!this.camiones) {
        this.camiones = [];
      }
      this.camiones.push(camion);
      localStorage.setItem('camiones', JSON.stringify(this.camiones));
    }
  
    obtenerCamiones() {
      return this.camiones;
    }
  
    obtenerCamionPorMatricula(matricula) {
      return this.camiones.find(camion => camion.matricula === matricula);
    }
  
    actualizarCamion(camionActualizado) {
      const index = this.camiones.findIndex(camion => camion.matricula === camionActualizado.matricula);
      if (index !== -1) {
        this.camiones[index] = camionActualizado;
        localStorage.setItem('camiones', JSON.stringify(this.camiones));
        return true;
      }
      return false;
    }
  
    eliminarCamion(matricula) {
      const index = this.camiones.findIndex(camion => camion.matricula === matricula);
      if (index !== -1) {
        this.camiones.splice(index, 1);
        localStorage.setItem('camiones', JSON.stringify(this.camiones));
        return true;
      }
      return false;
    }
  }
  
  