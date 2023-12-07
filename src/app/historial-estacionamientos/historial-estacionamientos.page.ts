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
  historialSeleccionado: string = ""
  puntuacion: string = ""
  comentario: string = ""
  isModalOpen = false;

  constructor(public route: Router, public nav: NavController) {
    const cli: string | null = localStorage.getItem("cli")
    if (cli !== null) {
      const cliente = JSON.parse(cli)
      this.cliente = cliente
    }
  }

  cliente: any
  ngOnInit() {
    fetch(`http://localhost:3000/historial/byCliente?idCliente=${this.cliente._id}`, { method: 'GET' })
      .then(async response => {
        const historials: any[] = await response.json();
        localStorage.setItem("his", JSON.stringify(historials))
        
        // Añade informacion del dueño al historial
        for (const h of historials) {
          const response = await fetch(`http://localhost:3000/dueno/byEstacionamiento?idEstacionamiento=${h.idEstacionamiento}`, { method: 'GET' })
          const dueno = await response.json();
          h.dueno = dueno
        }
        this.historials = historials
      })
      .catch(error => console.log('error', error));
  }

  seleccionarHistorial(idHistorial: string) {
    this.historialSeleccionado = idHistorial
    this.setOpen(true)
  }

  calificar() {
    console.log("El submit funciona");
    fetch(`http://localhost:3000/historial/calificar?tipoUsuario=cliente&idHistorial=${this.historialSeleccionado}&puntuacion=${this.puntuacion}&comentario=${this.comentario}`, { method: 'PUT' })
      .then(async response => {
        console.log(await response.json());
      })
      .catch(error => console.log('error', error));
    this.setOpen(false)
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  volverPerfilCliente() {
    this.nav.navigateForward("cliente")
  }
}
