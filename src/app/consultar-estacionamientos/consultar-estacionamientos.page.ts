import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-estacionamientos',
  templateUrl: 'consultar-estacionamientos.page.html',
  styleUrls: ['consultar-estacionamientos.page.scss'],
})
export class ConsultarEstacionamientosPage {
  comunas: string[] = ['Santiago', /* ...otras comunas... */];

  constructor(private router: Router) {}

  redireccionarAComuna(comuna: string) {
    this.router.navigate([`/${comuna.toLowerCase()}`]);
  }
  volverAHome() {
    this.router.navigate(['/home']);
  }
}
