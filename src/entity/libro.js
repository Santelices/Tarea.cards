class Libro{
    constructor(ISBN, titulo, precioCompra, precioVenta, cantidadActual){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.precioCompra = precioCompra;   
        this.precioVenta = precioVenta
        this.cantidadActual = cantidadActual
    }

}

class transaccionLibro{
    constructor(tipoTransaccion, fecha, cantidadTransaccion){
        this.tipoTransaccion = tipoTransaccion;
        this.fecha = fecha;
        this.cantidadTransaccion = cantidadTransaccion
    }
}

export {Libro, transaccionLibro}
