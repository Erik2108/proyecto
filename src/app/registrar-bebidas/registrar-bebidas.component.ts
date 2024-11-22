import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateRegistroRequest } from '../services/createRegistroRequest';
import { RegistroServiceService } from '../services/registro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-bebidas',
  templateUrl: './registrar-bebidas.component.html',
  styleUrl: './registrar-bebidas.component.css'
})
export class RegistrarBebidasComponent implements OnInit {

  datoRecuperado: string | null = '';
  formRegistro: FormGroup;
  mostrarPopup: boolean = false;
  mostrarPopupErr: boolean = false;

  get id_producto() {
    return this.formRegistro.get('id_producto') as FormControl;
  }
  get nombre() {
    return this.formRegistro.get('nombre') as FormControl;
  }
  get descripcion() {
    return this.formRegistro.get('descripcion') as FormControl;
  }
  get precio() {
    return this.formRegistro.get('precio') as FormControl;
  }
  get imagen_url() {
    return this.formRegistro.get('imagen_url') as FormControl;
  }

  constructor(private registroServiceService: RegistroServiceService, private router: Router){

    this.formRegistro = new FormGroup({
      'id_producto': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'precio': new FormControl('', Validators.required),
      'imagen_url': new FormControl('', Validators.required)
    });
  }
  

  ngOnInit() {
    this.datoRecuperado = localStorage.getItem('miDato');
    console.log("Dato proveniente de bebidas: ",this.datoRecuperado)
  }

  onSubmit(){

    const id_producto = this.formRegistro.get('id_producto')?.value || '';
    const nombre = this.formRegistro.get('nombre')?.value || '';
    const descripcion = this.formRegistro.get('descripcion')?.value || '';
    const precio = this.formRegistro.get('precio')?.value || '';
    const categoria = this.datoRecuperado ? this.datoRecuperado.toString() : '';
    const imagen_url = this.formRegistro.get('imagen_url')?.value || '';

    const json = new CreateRegistroRequest(id_producto, nombre, descripcion, precio, categoria, imagen_url);
    console.log("Datos json: ", json);

    this.registroServiceService.registroProducto(json).subscribe({
      next: (Data) => {
        console.log('Respuesta creacion ', Data);
        this.mostrarMensajeExito();
  
      },
      error: (errorData) => {
        this.mostrarMensajeErr();
        console.error("error en servicio: ", errorData);
      },
      complete: () => {
        console.info("Cracion de pruducto completa...");
      }
    });
  }

  mostrarMensajeExito() {
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
    this.router.navigate(['/pedido']);

  }

  mostrarMensajeErr() {
    this.mostrarPopupErr = true;
  }



}
