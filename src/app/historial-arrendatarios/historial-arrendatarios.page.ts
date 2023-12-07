import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-arrendatarios',
  templateUrl: './historial-arrendatarios.page.html',
  styleUrls: ['./historial-arrendatarios.page.scss'],
})
export class HistorialArrendatariosPage implements OnInit {
  historials: any[] = []
  dueno: any
  historialSeleccionado:string=""
  puntuacion: string = ""
  comentario: string = ""
  isModalOpen = false;

  constructor(public route: Router, public nav: NavController) {
    const due: string | null = localStorage.getItem("due")
    if (due !== null) {
      const dueno = JSON.parse(due)
      this.dueno = dueno
    }
  }
  ngOnInit() {
    fetch(`http://localhost:3000/estacionamiento/ids?idDueño=${this.dueno._id}`, { method: 'GET' })
      .then(async response => {
        const historials: any[] = await response.json();
        this.historials = historials;
        localStorage.setItem("his", JSON.stringify(historials))
        })
            .catch(error => console.log('error', error))
  }

  seleccionarHistorial(idHistorial: string) {
    this.historialSeleccionado = idHistorial
    this.setOpen(true)
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  calificar(){
    console.log("El submit funciona");
    fetch(`http://localhost:3000/historial/calificar?tipoUsuario=dueno&idHistorial=${this.historialSeleccionado}&puntuacion=${this.puntuacion}&comentario=${this.comentario}`, { method: 'PUT' })
      .then(async response => {
        console.log(await response.json());
      })
      .catch(error => console.log('error', error));
      this.setOpen(false)
  }

  volverPerfilDueno() {
    this.nav.navigateForward("dueno")
  }

  

}
