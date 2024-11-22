import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  constructor(private router: Router) { } 
  ngOnInit(): void {
    
  }

  bebidas() {
    this.router.navigate(['/bebidas']); 
  }
  comidaChatarra(){
    this.router.navigate(['/comida-chatarra' ]);
  }
  comidaVegetariana(){
    this.router.navigate(['/comida-vegetariana' ]);
  }
}
