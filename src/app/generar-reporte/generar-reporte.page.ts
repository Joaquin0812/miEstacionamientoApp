import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: 'generar-reporte.page.html',
  styleUrls: ['generar-reporte.page.scss'],
})
export class GenerarReportePage {
  dueno:any
  pagos: any[] = []

  constructor(private router: Router) {
    const due: string | null = localStorage.getItem("due")
    if (due !== null) {
      const dueno = JSON.parse(due)
      this.dueno = dueno
    }
  }

 ngOnInit(){
  fetch(`http://localhost:3000/pagos/ids?idDueño=${this.dueno._id}`, { method: 'GET' })
      .then(async response => {
        const pagos: any[] = await response.json();
        this.pagos = pagos;
        })
            .catch(error => console.log('error', error))
 }

  volverADueno() {
    this.router.navigate(['/dueno']);
  }
  
}
