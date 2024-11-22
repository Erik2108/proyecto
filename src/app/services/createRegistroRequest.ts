export class CreateRegistroRequest{
    constructor(
      public id_producto: string,
      public nombre: string,
      public descripcion: string,
      public precio: number,
      public categoria: string,
      public imagen_url: string    
    ) {}
  }