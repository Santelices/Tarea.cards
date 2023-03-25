class LibreriaRepository {
  constructor() {
    this.libros = JSON.parse(localStorage.getItem('libros')) || [];
  }

  agregarLibro(libro) {
    const libroEncontrado = this.buscarLibroPorISBN(libro.isbn);
    if (!libroEncontrado) {
      this.libros.push(libro);
      localStorage.setItem('libros', JSON.stringify(this.libros));
    }
  }

  eliminarLibro(isbn) {
    const indice = this.libros.findIndex((libro) => libro.isbn === isbn);
    if (indice !== -1) {
      this.libros.splice(indice, 1);
      localStorage.setItem('libros', JSON.stringify(this.libros));
    }
  }

  buscarLibroPorTitulo(titulo) {
    return this.libros.find((libro) => libro.titulo === titulo);
  }

  buscarLibroPorISBN(isbn) {
    return this.libros.find((libro) => libro.isbn === isbn);
  }

  abastecerLibro(isbn, cantidad, precioCompra) {
    const libroEncontrado = this.buscarLibroPorISBN(isbn);
    if (libroEncontrado) {
      libroEncontrado.abastecer(cantidad, precioCompra);
      localStorage.setItem('libros', JSON.stringify(this.libros));
    }
  }

  venderLibro(isbn, cantidad) {
    const libroEncontrado = this.buscarLibroPorISBN(isbn);
    if (libroEncontrado) {
      libroEncontrado.vender(cantidad);
      localStorage.setItem('libros', JSON.stringify(this.libros));
    }
  }

  calcularCantidadTransaccionesAbastecimiento(isbn) {
    const libroEncontrado = this.buscarLibroPorISBN(isbn);
    if (libroEncontrado) {
      return libroEncontrado.calcularCantidadTransaccionesAbastecimiento();
    }
    return 0;
  }

  buscarLibroMasCostoso() {
    return this.libros.reduce((libroMasCostoso, libro) => {
      if (libro.precioVenta > libroMasCostoso.precioVenta) {
        return libro;
      }
      return libroMasCostoso;
    }, { precioVenta: 0 });
  }
}
