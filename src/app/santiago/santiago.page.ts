import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santiago',
  templateUrl: 'santiago.page.html',
  styleUrls: ['santiago.page.scss'],
})
export class SantiagoPage {
  estacionamientos: { direccion: string, valorHora: number }[] = [];

  constructor(private router: Router) {
    this.generarEstacionamientos();
  }

  generarEstacionamientos() {
    // Generar 5 ubicaciones aleatorias
    for (let i = 0; i < 10; i++) {
      const direccion = this.obtenerDireccionAleatoria();
      const valorHora = Math.floor(Math.random() * 2001) + 2000; // Valor entre $2000 y $4000

      this.estacionamientos.push({ direccion, valorHora });
    }
  }

  obtenerDireccionAleatoria() {
    const direcciones = [
      'Av.Santa Rosa 280, Santiago Centro',
      'Nataniel Cox 80, Santiago Centro',
      'Carmen 1410, Santiago Centro',
      'San Diego 246, Santiago Centro',
      'Lord Cochrane 376, Santiago Centro',
      'Victoria 480, Santiago Centro',
      'Av.Santa Rosa 478, Santiago Centro',
      'San Francisco 1665, Santiago Centro',
      'Santa Isabel 365, Santiago Centro',
      'Sargento Aldea 1370, Santiago Centro'
      // Agrega más direcciones si es necesario
    ];

    const indice = Math.floor(Math.random() * direcciones.length);
    return direcciones[indice];
    }
    
    volverAConsultarEstacionamientos() {
      this.router.navigate(['/consultar-estacionamientos']);
    }
}
