import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-estacionamiento',
  templateUrl: './calificar-estacionamiento.page.html',
  styleUrls: ['./calificar-estacionamiento.page.scss'],
})
export class CalificarEstacionamientoPage implements OnInit {

  constructor(public route:Router, public nav:NavController) { }

  ngOnInit() {
  }

  volverCliente(){
    this.nav.navigateForward("cliente")
  }
}
