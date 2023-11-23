import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calificar-cliente',
  templateUrl: './calificar-cliente.page.html',
  styleUrls: ['./calificar-cliente.page.scss'],
})
export class CalificarClientePage implements OnInit {

  constructor(public route:Router, public nav:NavController) { }

  ngOnInit() {
  }

  volverDueno(){
    this.nav.navigateForward("/dueno")
  }
}
