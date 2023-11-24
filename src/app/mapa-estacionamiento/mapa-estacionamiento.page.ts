import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import { icon } from 'leaflet';

@Component({
  selector: 'app-mapa-estacionamiento',
  templateUrl: './mapa-estacionamiento.page.html',
  styleUrls: ['./mapa-estacionamiento.page.scss'],
})
export class MapaEstacionamientoPage implements OnInit, OnDestroy {
  map!: Leaflet.Map;
  estacionamiento: any;

  constructor(public router: Router,public nav:NavController) {
    if (router.getCurrentNavigation()?.extras.state) {
      this.estacionamiento = this.router.getCurrentNavigation()?.extras.state;
    }
  }

  volverReservar(){
    this.nav.navigateForward("reservar-estacionamiento")
  }

  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([-33.4435816,-70.6490195], 15);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    const options = {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }

    Leaflet.marker([this.estacionamiento.latitud, this.estacionamiento.longitud], options)
      .addTo(this.map)
      .bindPopup(`<p>${this.estacionamiento.direccion}<br/>Valor: $${this.estacionamiento.valorPorHora}</p>`)
      .openPopup();
    // Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
  }

  

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }
}