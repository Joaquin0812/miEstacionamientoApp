import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-estacionamiento',
  templateUrl: './calificar-estacionamiento.page.html',
  styleUrls: ['./calificar-estacionamiento.page.scss'],
})
export class CalificarEstacionamientoPage implements OnInit {

  estacionamiento: any
  constructor(public route: Router, public nav: NavController) {
    const estacionamientoString: string | null = localStorage.getItem("calificar-estacionamiento")
    if (estacionamientoString !== null) {
      const estacionamientoObject = JSON.parse(estacionamientoString)
      this.estacionamiento = estacionamientoObject
    }
  }

  ngOnInit() {
  }

  volverCliente() {
    this.nav.navigateForward("cliente")
  }
}
