import {Estudiante} from '../entity/Estudiante.js'

export class CasoUsoEstudiante {
    constructor(repositorio) {
      this.repositorio = repositorio;
    }
  
    // Registra la nota de un estudiante
    registrarNota(matricula, nombre, nota) {
      const estudianteExistente = this.repositorio.obtenerEstudiantePorMatricula(matricula);
      
      if (estudianteExistente) {
        alert(`El estudiante con matrícula ${matricula} ya existe.`);
      } else if (nota > 5) {
        alert("La nota no puede ser mayor que 5.");
      } else {
        const estudiante = new Estudiante(matricula, nombre, nota);
        this.repositorio.agregarEstudiante(estudiante);
      }
    }
    
    // Calcula el promedio de las notas de todos los estudiantes
    calcularPromedio() {
      const estudiantes = this.repositorio.obtenerEstudiantes();
      const totalNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
      return totalNotas / estudiantes.length;
    }
    
    // Calcula la cantidad de estudiantes que están por encima del promedio
    calcularEstudiantesSobresalientes() {
      const promedio = this.calcularPromedio();
      const estudiantes = this.repositorio.obtenerEstudiantes();
      return estudiantes.filter((estudiante) => estudiante.nota > promedio).length;
    }
    
    editarNota(matricula, nuevaNota) {
      
      // Verificar si el usuario ingresó una matrícula válida
      if (matricula !== null && matricula.trim() !== '') {
        // Obtener el estudiante con la matrícula ingresada
        const estudiante = this.repositorio.obtenerEstudiantePorMatricula(matricula);    
        // Verificar si se encontró un estudiante con la matrícula ingresada
        if (estudiante !== null) {
          if (nuevaNota !== null && nuevaNota.trim() !== '') {
            nuevaNota = parseFloat(nuevaNota);
            // Verificar si la nueva nota es válida (menor o igual a 5)
            if (nuevaNota <= 5) {
              this.repositorio.editarEstudiante(estudiante, nuevaNota);
            } else {
              alert('La nota debe ser menor o igual a 5');
            }
          }
        } else {
          alert('Ingrese una matrícula válida');
        }
      }
    }
    
    eliminarNota(matricula) {
      // Verificar si el usuario ingresó una matrícula válida
      if (matricula !== null && matricula.trim() !== '') {
        // Obtener el índice del estudiante con la matrícula ingresada
        const index = this.repositorio.estudiantes.findIndex(e => e.matricula === matricula);
        // Verificar si se encontró un estudiante con la matrícula ingresada
        if (index === -1) {
          return alert('No se encontró ningún estudiante con la matrícula ingresada');
        } else {
          // Llamar al método eliminarEstudiante del repositorio
          this.repositorio.eliminarEstudiante(matricula);
          alert('Estudiante eliminado correctamente');

          
        }
      } else {
        alert('Ingrese una matrícula válida');
      }
    }
    
    
}
