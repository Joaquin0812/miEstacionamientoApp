import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

interface Estacionamiento {
  direccion: string;
  valorPorHora: number;
  estado: string;
}

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.page.html',
  styleUrls: ['./estacionamiento.page.scss'],
})
export class EstacionamientoPage {
  estacionamientos: any[] = []
  nuevaDireccion: string = '';
  nuevoValorPorHora: number = 0;

  dueno: any
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
  cambiarEstado(idEst: String, estadoActual:String) {
    
    const estado: String = estadoActual !== "deshabilitado" ? "deshabilitado" : "disponible"
    fetch(`http://localhost:3000/estacionamiento/${idEst}?estado=${estado}`, { method: 'PUT' })
      .then(async response => {
        const estacionamiento = await response.json();
        const estactualizado = this.estacionamientos.findIndex(e => e._id == idEst)
        this.estacionamientos[estactualizado].disponibilidad=estacionamiento.disponibilidad
        //this.estacionamientos = this.estacionamientos.filter(e => e._id !== estacionamiento._id)
      })
      .catch(error => console.log('error', error));


  }

  agregarEstacionamiento() {
    this.estacionamientos.push({
      direccion: this.nuevaDireccion,
      valorPorHora: this.nuevoValorPorHora,
      estado: 'Habilitado'
    });

    // Restablecer los campos del formulario
    this.nuevaDireccion = '';
    this.nuevoValorPorHora = 0;
  }

  volverADueno() {
    this.router.navigate(['/dueno']);
  }
}
