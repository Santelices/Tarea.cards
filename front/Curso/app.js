import {RepositorioCurso} from '../../src/repository/repositorioCurso.js'
import { CasoUsoEstudiante } from '../../src/caseUse/casoDeUsoCurso.js'
import {RenderTemplate} from './render-template.js'

const repositorioCurso  = new RepositorioCurso()
const casoUsoEstudiante = new CasoUsoEstudiante(repositorioCurso)

const tdbody = document.querySelector('#tabla-estudiantes > tbody')
const renderTemplate = new RenderTemplate(repositorioCurso.obtenerEstudiantes(), tdbody)

const btnagregar = document.querySelector('#agregar')

btnagregar.addEventListener('click', (event) => {
  event.preventDefault();
  
  const matricula = document.querySelector('#matricula').value;
  const nombre = document.querySelector('#nombre').value;
  const nota = parseFloat(document.querySelector('#nota').value);
  
  // Registra la nota del estudiante
  casoUsoEstudiante.registrarNota(matricula, nombre, nota);
  
  // Actualiza la tabla de estudiantes
  renderTemplate.renderizarTabla();
  
  // Calcula y muestra el promedio de las notas de todos los estudiantes
  const promedio = casoUsoEstudiante.calcularPromedio();
  document.querySelector('#promedio').value = promedio.toFixed(2);
  
  // Calcula y muestra la cantidad de estudiantes que están por encima del promedio
  const sobresalientes = casoUsoEstudiante.calcularEstudiantesSobresalientes();
  document.querySelector('#num-sobresalientes').value = sobresalientes;
});

const btneditar = document.querySelector('#editar');

btneditar.addEventListener('click', (event) => {
  event.preventDefault();

  const matricula = prompt('Ingrese la matrícula del estudiante a editar');
  const nuevaNota = prompt('Ingrese la nueva nota para el estudiante');
  
  casoUsoEstudiante.editarNota(matricula, nuevaNota);
  
  renderTemplate.renderizarTabla();
})

const btneliminar = document.querySelector('#eliminar')

btneliminar.addEventListener('click', (event) => {
  event.preventDefault();
  const matricula = prompt('Ingrese la matrícula del estudiante a editar');

  casoUsoEstudiante.eliminarNota(matricula);

  renderTemplate.renderizarTabla();
})
