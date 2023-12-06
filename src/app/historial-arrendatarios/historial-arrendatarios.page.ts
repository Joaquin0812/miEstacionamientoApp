import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-arrendatarios',
  templateUrl: './historial-arrendatarios.page.html',
  styleUrls: ['./historial-arrendatarios.page.scss'],
})
export class HistorialArrendatariosPage implements OnInit {
  estacionamientos: any[] = []
  historials: any[]=[]
  dueno:any
  constructor() {
    const due: string | null = localStorage.getItem("due")
    if (due !== null) {
      const dueno = JSON.parse(due)
      this.dueno = dueno
   }
  }


  ngOnInit() {
    fetch(`http://localhost:3000/estacionamiento/byDueno?idDueño=${this.dueno._id}`, { method: 'GET' })
   .then(async response => {
     const estacionamientos = await response.json();
     this.estacionamientos = estacionamientos;
     localStorage.setItem("est",estacionamientos)
   })
   .catch(error => console.log('error', error));
   
   fetch(`http://localhost:3000/historial/arrendatarios?idEstacionamiento=655ed6a0a5f27bcc7d24d3b4`, { method: 'GET' })
      .then(async response => {
        const historials: any[] = await response.json();
        this.historials = historials;
        localStorage.setItem("his", JSON.stringify(historials))
      })
      .catch(error => console.log('error', error));
  }

}
