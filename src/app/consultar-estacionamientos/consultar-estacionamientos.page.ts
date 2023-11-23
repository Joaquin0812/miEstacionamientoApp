import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-estacionamientos',
  templateUrl: 'consultar-estacionamientos.page.html',
  styleUrls: ['consultar-estacionamientos.page.scss'],
})
export class ConsultarEstacionamientosPage {


  estacionamientos: any []=[]
  constructor(private router: Router) {}

  ngOnInit() {
    fetch("http://localhost:3000/estacionamiento?estado=disponible", { method: 'GET' })
      .then(async response => {
        const estacionamientos = await response.json();
        this.estacionamientos = estacionamientos;  
      })
      .catch(error => console.log('error', error));
  }


  volverAHome() {
    this.router.navigate(['/home']);
  }
}
