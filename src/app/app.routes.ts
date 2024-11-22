import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PedidoComponent } from './pedido/pedido.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { ComidaChatarraComponent } from './comida-chatarra/comida-chatarra.component';
import { ComidaVegetarianaComponent } from './comida-vegetariana/comida-vegetariana.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistrarBebidasComponent } from './registrar-bebidas/registrar-bebidas.component';

//import path from 'path';

export const routes: Routes = [
    {path: 'login', component: LoginComponent}, 
    {path: 'pedido', component: PedidoComponent},
    {path: 'bebidas', component: BebidasComponent},
    {path: 'comida-chatarra', component: ComidaChatarraComponent},
    {path: 'comida-vegetariana', component: ComidaVegetarianaComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'registrar-bebida', component:RegistrarBebidasComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Aquí es donde ocurre el error
  exports: [RouterModule]
})
export class AppRoutingModule { }