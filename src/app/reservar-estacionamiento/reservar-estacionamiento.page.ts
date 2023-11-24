import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservar-estacionamiento',
  templateUrl: './reservar-estacionamiento.page.html',
  styleUrls: ['./reservar-estacionamiento.page.scss'],
})
export class ReservarEstacionamientoPage implements OnInit {
  estacionamientos: any[] = [];

  constructor(public nav: NavController) { }

  ngOnInit() {
    fetch("http://localhost:3000/estacionamiento?estado=disponible", { method: 'GET' })
      .then(async response => {
        const estacionamientos = await response.json();
        this.estacionamientos = estacionamientos;  
      })
      .catch(error => console.log('error', error));
  }

  reservar(id: String) {
    fetch(`http://localhost:3000/estacionamiento/${id}?estado=reservado`, { method: 'PUT' })
    .then(async response => {
      const estacionamiento = await response.json();
      this.estacionamientos = this.estacionamientos.filter(e => e._id !== estacionamiento._id)
    })
    .catch(error => console.log('error', error));
  }

  verMapa(estacionamiento: any) {
    this.nav.navigateForward('mapa-estacionamiento', { state: estacionamiento });
  }

}
