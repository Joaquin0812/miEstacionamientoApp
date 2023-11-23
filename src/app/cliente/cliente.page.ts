import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  cliente:any=""
  constructor(public  router:Router, public nav:NavController) { 
    this.cliente=this.router.getCurrentNavigation()?.extras.state
    console.log(this.cliente);
    this.cliente.nombre=(this.cliente.nombre as string).toUpperCase()
  }

  cerrarSesion(){
    this.nav.navigateForward("/home")
  }

  irHistorialEstacionamientos(){
    this.nav.navigateForward("/historial-estacionamientos")
  }
  irCalificarEstacionamiento(){
    this.nav.navigateForward("/calificar-estacionamiento")
  }
  irPerfilCliente(){
    this.nav.navigateForward("/perfil-cliente")
  }
  irReservarEstacionamiento(){
    this.nav.navigateForward("/reservar-estacionamiento")
  }
  ngOnInit() {
  }

}
