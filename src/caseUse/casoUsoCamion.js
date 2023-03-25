import { Camion } from "../entity/camion.js";

export class CasoUsoCamion{
    constructor(repositorio){
        this.repositorio = repositorio;
    }
    agregarCamion(matricula, capacidad, gasolina, carga) {
        const camion = new Camion(matricula, capacidad, gasolina, carga);
        this.repositorio.agregarCamion(camion);
    }
    
    cargarCamion(matricula, carga) {
        const camion = this.buscarCamionPorMatricula(matricula);
        if (!camion) {
            return alert ("No existe un camión con esa matrícula.");
        }
        const nuevaCarga = camion.carga + carga;
        if (nuevaCarga > camion.capacidad) {
          return alert("La carga excede la capacidad del camión.");
        }
        camion.carga = nuevaCarga;
        this.repositorio.actualizarCamion(camion);
    }
    
    descargarCamion(matricula, carga) {
        const camion = this.buscarCamionPorMatricula(matricula);
        if (!camion) {
          return alert("No existe un camión con esa matrícula.");
        }
        const nuevaCarga = camion.carga - carga;
        if (nuevaCarga < 0) {
          return alert("La carga a descargar es mayor a la carga actual del camión.");
        }
        camion.carga = nuevaCarga;
        this.repositorio.actualizarCamion(camion);
    }
    
    buscarCamionPorMatricula(matricula) {
        return this.repositorio.obtenerCamiones().find(camion => camion.matricula === matricula);
    }
    
    obtenerCamionConMenorConsumoParaCarga(carga) {
        const camionesDisponibles = this.repositorio.obtenerCamiones().filter(camion => camion.carga >= carga);
        if (camionesDisponibles.length === 0) {
          return null;
        }
        const camionConMenorConsumo = camionesDisponibles.reduce((camionAnterior, camionActual) => {
          return camionActual.consumo < camionAnterior.consumo ? camionActual : camionAnterior;
        });
        return camionConMenorConsumo;
    }
}