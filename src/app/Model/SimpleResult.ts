export class SimpleResult {
    id_producto: string;
    nombre: string;
    descripcion: string;
    precio: string;
    categoria: string;
    imagen_url: string;

    constructor(id_producto: string, nombre: string, descripcion: string, precio: string, categoria: string, imagen_url: string) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen_url = imagen_url;
    }
}
