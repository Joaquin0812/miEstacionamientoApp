import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dueno',
  templateUrl: 'dueno.page.html',
  styleUrls: ['dueno.page.scss'],
})
export class DuenoPage {

  dueno:any
  constructor(public router: Router, public nav:NavController){
    const due: string | null=localStorage.getItem("due")
    if (due!==null){
    const dueno = JSON.parse(due)
    this.dueno=dueno
    }
  }

  estacionamiento(){
    fetch("http://localhost:3000/estacionamiento?estado=disponible", { method: 'GET' })
      .then(async response => {
        const estacionamiento = await response.json();
      
      })
      .catch(error => console.log('error', error));
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
  irPerfilDueno(){
    this.router.navigate(['/perfil-dueno']);
  }
  irGenerarReporte(){
    this.router.navigate(['/generar-reporte']);
  }
  
}
