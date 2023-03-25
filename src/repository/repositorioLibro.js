class RepositorioLibro {
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    eliminarLibro(ISBN) {
      const index = this.libros.findIndex((libro) => libro.ISBN === ISBN);
      if (index !== -1) {
        this.libros.splice(index, 1);
      }
    }
  
    buscarLibroPorTitulo(titulo) {
      return this.libros.filter((libro) => libro.titulo === titulo);
    }
  
    buscarLibroPorISBN(ISBN) {
      return this.libros.find((libro) => libro.ISBN === ISBN);
    }
  
    abastecer(ISBN, cantidad, fechaRealizacion) {
      const libro = this.buscarLibroPorISBN(ISBN);
      if (libro) {
        libro.cantidadActual += cantidad;
        libro.transacciones.push(
          new TransaccionLibro(true, fechaRealizacion, cantidad)
        );
      }
    }
  
    vender(ISBN, cantidad, fechaRealizacion) {
      const libro = this.buscarLibroPorISBN(ISBN);
      if (libro && libro.cantidadActual >= cantidad) {
        libro.cantidadActual -= cantidad;
        libro.transacciones.push(
          new TransaccionLibro(false, fechaRealizacion, cantidad)
        );
        return true;
      }
      return false;
    }
  
    calcularTransacciones(ISBN) {
      const libro = this.buscarLibroPorISBN(ISBN);
      if (libro) {
        return libro.transacciones.length;
      }
      return 0;
    }
  
    libroCostoso() {
      if (this.libros.length === 0) {
        return null;
      }
      return this.libros.reduce((libro1, libro2) =>
        libro1.precioVenta > libro2.precioVenta ? libro1 : libro2
      );
    }
  }