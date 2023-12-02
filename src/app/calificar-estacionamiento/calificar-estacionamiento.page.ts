import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-estacionamiento',
  templateUrl: './calificar-estacionamiento.page.html',
  styleUrls: ['./calificar-estacionamiento.page.scss'],
})
export class CalificarEstacionamientoPage implements OnInit {

  historial:any
  constructor(public route:Router, public nav:NavController) {
    const his: string | null=localStorage.getItem("his")
    if (his!==null){
    const historial = JSON.parse(his)
    this.historial=historial
    }
   }

  ngOnInit() {
    console.log(this.historial.calificacion);
    
  }

  volverCliente(){
    this.nav.navigateForward("cliente")
  }
}
