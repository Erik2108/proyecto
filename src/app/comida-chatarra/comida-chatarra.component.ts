import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { SimpleResult } from '../Model/SimpleResult';
import { RegistroServiceService } from '../services/registro-service.service';

@Component({
  selector: 'app-comida-chatarra',
  templateUrl: './comida-chatarra.component.html',
  styleUrls: ['../bebidas/bebidas.component.css']
})
export class ComidaChatarraComponent implements OnInit{
  categoria: SimpleResult[] = [];
  mostrarPopup: boolean = false;

  constructor(private loginServiceService: LoginServiceService, private registroServiceService: RegistroServiceService){

  }
  ngOnInit(): void {
    
    this.productos();
  }

  productos(){
    this.loginServiceService.productos().subscribe({
      next: (producData) => {
        this.categoria = producData.filter(prod => prod.categoria === 'Comida Chatarra');
        console.log("productos: ", this.categoria);
      },
      error: (errorData) => {
        console.error( "Error obteniendo Productos...");
      },
      complete: () => {
        console.info("Productos completado...");
      }
    });
  }

  eliminarProducto(id_producto: string) {
    this.registroServiceService.eliminarProducto(id_producto).subscribe(
      response => {
        console.log('Producto eliminado:', response);
        if(response.deletedId != "" || response.deletedId != null){
          this.mostrarMensajeExito();
        }
      },
      error => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  enviarDato() {
    const dato = 'Comida Chatarra';
    localStorage.setItem('miDato', dato);
    console.log('Dato guardado en localStorage: ', dato);
  }
  mostrarMensajeExito() {
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
    window.location.reload();

  }

}
