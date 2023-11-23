import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar-estacionamiento',
  templateUrl: './reservar-estacionamiento.page.html',
  styleUrls: ['./reservar-estacionamiento.page.scss'],
})
export class ReservarEstacionamientoPage implements OnInit {
  estacionamientos: any[] = [];

  constructor() { }

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

}
