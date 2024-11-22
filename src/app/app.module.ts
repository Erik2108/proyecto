import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PedidoComponent } from './pedido/pedido.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { ComidaChatarraComponent } from './comida-chatarra/comida-chatarra.component';
import { ComidaVegetarianaComponent } from './comida-vegetariana/comida-vegetariana.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistrarBebidasComponent } from './registrar-bebidas/registrar-bebidas.component';

@NgModule({
  declarations: [
    LoginComponent,
    PedidoComponent,
    BebidasComponent,
    ComidaChatarraComponent,
    ComidaVegetarianaComponent,
    RegistrarComponent,
    RegistrarBebidasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [LoginComponent] 
})
export class AppModule { }
