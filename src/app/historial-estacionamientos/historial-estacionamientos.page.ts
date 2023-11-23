import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-estacionamientos',
  templateUrl: './historial-estacionamientos.page.html',
  styleUrls: ['./historial-estacionamientos.page.scss'],
})
export class HistorialEstacionamientosPage implements OnInit {

  constructor(public route:Router,public nav:NavController) { }

  ngOnInit() {
  }

  volverCliente(){
    this.nav.navigateForward("cliente")
  }
}
