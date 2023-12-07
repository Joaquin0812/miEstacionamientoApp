import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.page.html',
  styleUrls: ['./estacionamiento.page.scss'],
})
export class EstacionamientoPage {
  estacionamientos: any[] = []
  direccion: string=""
  latitud: string=""
  longitud: string=""
  valorph: number=0
  dueno: any
  isModalOpen = false;

  constructor(private router: Router, public nav: NavController) {
    const due: string | null = localStorage.getItem("due")
    if (due !== null) {
      const dueno = JSON.parse(due)
      this.dueno = dueno
    }


    fetch(`http://localhost:3000/estacionamiento/byDueno?idDueño=${this.dueno._id}`, { method: 'GET' })
      .then(async response => {
        const estacionamientos = await response.json();
        this.estacionamientos = estacionamientos;
      })
      .catch(error => console.log('error', error));
  }

  verMapa(estacionamiento: any) {
    this.nav.navigateForward('mapa-estacionamiento', { state: estacionamiento });
  }

  //habilitar o deshabilitar estacionamiento
  cambiarEstado(idEst: String, estadoActual: String) {

    const estado: String = estadoActual !== "deshabilitado" ? "deshabilitado" : "disponible"
    fetch(`http://localhost:3000/estacionamiento/${idEst}?estado=${estado}`, { method: 'PUT' })
      .then(async response => {
        const estacionamiento = await response.json();
        const estactualizado = this.estacionamientos.findIndex(e => e._id == idEst)
        this.estacionamientos[estactualizado].disponibilidad = estacionamiento.disponibilidad
        //this.estacionamientos = this.estacionamientos.filter(e => e._id !== estacionamiento._id)
      })
      .catch(error => console.log('error', error));


  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  agregarEstacionamiento() {
    this.setOpen(true)
  }

  agregar(){
    console.log("El submit funciona");
    fetch(`http://localhost:3000/estacionamiento/?idDueño=${this.dueno._id}&direccion=${this.direccion}&latitud=${this.latitud}&longitud=${this.longitud}&valorPorHora=${this.valorph}`, { method: 'POST' })
      .then(async response => {
        console.log(await response.json());
      })
      .catch(error => console.log('error', error));
      this.setOpen(false)
  }

  volverADueno() {
    this.router.navigate(['/dueno']);
  }
}
