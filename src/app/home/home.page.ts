import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irAInicioSesionCliente() {
    this.router.navigate(['/inicio-sesion']);
  }

  irAInicioSesionDueno() {
    this.router.navigate(['/inicio-sesion-dueno']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irAConsultarEstacionamientos() {
    this.router.navigate(['/consultar-estacionamientos']);
  }
}
