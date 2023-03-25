import { RepositorioCamion } from "../../src/repository/repositorioCamion.js";
import { CasoUsoCamion } from "../../src/caseUse/casoUsoCamion.js";
import { RenderTemplate } from "./render_templateCamion.js";

const repositorioCamion = new RepositorioCamion()
const casoUsoCamion = new CasoUsoCamion(repositorioCamion)

const tdbody = document.querySelector('#tabla-camiones > tbody')
const renderTemplate = new RenderTemplate(repositorioCamion.obtenerCamiones(), tdbody)

const btnagregar = document.querySelector('#agregar')
btnagregar.addEventListener('click', (event) => {
    event.preventDefault();
    
    const matricula = document.querySelector('#matricula').value;
    const capacidadCarga = parseFloat(document.querySelector('#capacidad').value);
    const consumoGasolina = parseFloat(document.querySelector('#consumo').value);
    const cargaActual = parseFloat(document.querySelector('#carga').value);
    
    // Registra el camion
  casoUsoCamion.agregarCamion(matricula, capacidadCarga, consumoGasolina, cargaActual);
  
  // Actualiza la tabla de camiones
    renderTemplate.renderizarTabla();
});

tdbody.addEventListener('click', (event) => {
  event.preventDefault();
  // capturamos la accion-depositar monto
  if (event.target.closest('a[rel="accion-cargar"]')) {

    const carga = prompt("Ingrese la carga: ", "0.00")

    if (isFinite(carga) && carga) {
      const matricula = event.target.dataset.camion
      casoUsoCamion.cargarCamion(matricula, carga)
      tdbody.innerHTML = renderTemplate.renderTdbody()
    }

  } // capturamos la accion-bebitar monto
  else if (event.target.closest('a[rel="accion-debitar"]')) {

    const monto = prompt("Ingrese el monto a Debitar: ", "0.00")

    if (isFinite(monto) && monto) {
      const numeroCuenta = event.target.dataset.cuenta
      casoUsoSimuladorBancario.debitarMonto(numeroCuenta, monto)
      tdbody.innerHTML = renderTemplate.renderTbody()
    }

  }

})