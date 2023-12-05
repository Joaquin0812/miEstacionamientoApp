import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-estacionamiento',
  templateUrl: './calificar-estacionamiento.page.html',
  styleUrls: ['./calificar-estacionamiento.page.scss'],
})
export class CalificarEstacionamientoPage implements OnInit {

  historials: any
  estacionamiento: any
  puntuacion:number=0
  comentario: string = ""

  constructor(public route: Router, public nav: NavController) {
    const estacionamientoString: string | null = localStorage.getItem("calificar-estacionamiento")
    if (estacionamientoString !== null) {
      const estacionamientoObject = JSON.parse(estacionamientoString)
      this.estacionamiento = estacionamientoObject
    }

    const his: string | null=localStorage.getItem("his")
    if (his!==null){
    const historials = JSON.parse(his)
    this.historials=historials
    }
  }

  ngOnInit() {
  }

  submitQuality(){
    console.log("El submit funciona");
  }
  volverCliente() {
    this.nav.navigateForward("cliente")
  }
}
