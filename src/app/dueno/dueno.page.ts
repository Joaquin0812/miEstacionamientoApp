import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dueno',
  templateUrl: 'dueno.page.html',
  styleUrls: ['dueno.page.scss'],
})
export class DuenoPage {

  dueno:any=""
  constructor(public router: Router, public nav:NavController
  ){ 
    this.dueno=this.router.getCurrentNavigation()?.extras.state
    console.log(this.dueno);
    this.dueno.nombre=(this.dueno.nombre as string).toUpperCase()
  }

  cerrarSesion(){
    this.nav.navigateForward("home")
  }
  irAEstacionamiento(){
    this.router.navigate(['/estacionamiento']);
  }
  irCalificarCliente(){
    this.router.navigate(['/calificar-cliente']);
  }
  irGenerarReporte(){
    this.router.navigate(['/generar-reporte']);
  }
}
