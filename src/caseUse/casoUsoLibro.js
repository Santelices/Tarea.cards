import {Libro} from "../entity/libro.js";

export class CasoDeUsoLibro {
    constructor(repository) {
      this.repository = repository;
    }
  
    agregarLibro(isbn, titulo, precioCompra, precioVenta, cantidad) {
      const libro = new Libro(isbn, titulo, precioCompra, precioVenta, cantidad);
      this.repository.agregarLibro(libro);
    }
  
    eliminarLibro(isbn) {
      this.repository.eliminarLibro(isbn);
    }
  
    buscarLibroPorTitulo(titulo) {
      return this.repository.buscarLibroPorTitulo(titulo);
    }
  
    buscarLibroPorISBN(isbn) {
      return this.repository.buscarLibroPorISBN(isbn);
    }
  
    abastecerLibro(isbn, cantidad, precioCompra) {
      this.repository.abastecerLibro(isbn, cantidad, precioCompra);
    }
  
    venderLibro(isbn, cantidad) {
      this.repository.venderLibro(isbn, cantidad);
    }
  
    calcularCantidadTransaccionesAbastecimiento(isbn) {
      let libro = this.repository.buscarLibroPorISBN(isbn);
      let cantidad = 0;
      if (libro) {
        for (let i = 0; i < libro.transacciones.length; i++) {
          if (libro.transacciones[i].tipoTransaccion === "abastecimiento") {
            cantidad += libro.transacciones[i].cantidadTransaccion;
          }
        }
      }
      return cantidad;
    }
  
    buscarLibroMasCostoso() {
      let libros = this.repository.listarLibros();
      let libroMasCostoso = libros[0];
      for (let i = 1; i < libros.length; i++) {
        if (libros[i].precioVenta > libroMasCostoso.precioVenta) {
          libroMasCostoso = libros[i];
        }
      }
      return libroMasCostoso;
    }
  
    calcularDineroEnCaja() {
      let libros = this.repository.listarLibros();
      let dineroEnCaja = 1000000;
      for (let i = 0; i < libros.length; i++) {
        dineroEnCaja += (libros[i].cantidadActual * libros[i].precioVenta);
      }
      return dineroEnCaja;
    }
  }
  