import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-estacionamientos',
  templateUrl: './historial-estacionamientos.page.html',
  styleUrls: ['./historial-estacionamientos.page.scss'],
})
export class HistorialEstacionamientosPage implements OnInit {
  historials: any[] = []
  constructor(public route: Router, public nav: NavController) { 
    const cli: string | null = localStorage.getItem("cli")
    if (cli !== null) {
      const cliente = JSON.parse(cli)
      this.cliente = cliente
    }
  }

  cliente: any
  ngOnInit() {
    fetch(`http://localhost:3000/historial/byCliente?rutcliente=${this.cliente.rut}`, { method: 'GET' })
      .then(async response => {
        const historials = await response.json();
        this.historials = historials;
      })
      
      .catch(error => console.log('error', error));

  }

  

  volverPerfilCliente(){
    this.nav.navigateForward("cliente")
  }
}
