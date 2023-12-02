import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: 'generar-reporte.page.html',
  styleUrls: ['generar-reporte.page.scss'],
})
export class GenerarReportePage {
  transferencias: any[] = [];

  constructor(private router: Router) {
    this.generarReporteTransferencias();
  }

  generarReporteTransferencias() {
    for (let i = 0; i < 3; i++) {
      const fecha = this.generarFechaAleatoria();
      const monto = Math.floor(Math.random() * 13000) + 2000; // Valores entre $2000 y $15000
      const origen = 'Tarjeta de Crédito';

      this.transferencias.push({ fecha, monto, origen });
    }
  }

  generarFechaAleatoria() {
    const fecha = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    return fecha.toISOString().split('T')[0];
  }
  volverADueno() {
    this.router.navigate(['/dueno']);
  }
  
}
