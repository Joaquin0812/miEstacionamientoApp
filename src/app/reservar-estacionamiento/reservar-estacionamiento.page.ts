import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservar-estacionamiento',
  templateUrl: './reservar-estacionamiento.page.html',
  styleUrls: ['./reservar-estacionamiento.page.scss'],
})
export class ReservarEstacionamientoPage implements OnInit {
  estacionamientos: any[] = [];
  isModalOpen = false;
  estacionamientoSeleccionado: string = ""
  nhoras: number = 0
  fecha: string = ""
  cliente: any

  constructor(public nav: NavController) {
    const cli: string | null = localStorage.getItem("cli")
    if (cli !== null) {
      const cliente = JSON.parse(cli)
      this.cliente = cliente
    }
  }

  ngOnInit() {
    fetch("http://localhost:3000/estacionamiento?estado=disponible", { method: 'GET' })
      .then(async response => {
        const estacionamientos = await response.json();
        this.estacionamientos = estacionamientos;
      })
      .catch(error => console.log('error', error));
  }

  reservar() {
    //Generando registro de reserva
    fetch(`http://localhost:3000/historial?idEstacionamiento=${this.estacionamientoSeleccionado}&idCliente=${this.cliente._id}&fecha=${this.fecha}&tiempoDeUso=${this.nhoras}`, { method: 'POST' })
      .then(async response => {
        console.log(await response.json());

        //Generando registro de pago
        fetch(`http://localhost:3000/pagos/?idCliente=${this.cliente._id}&nombreCliente=${this.cliente.nombre}&idEstacionamiento=${this.estacionamientoSeleccionado}&fecha=${this.fecha}&banco=${this.cliente.cuentaBancaria.banco}&nroCuenta=${this.cliente.cuentaBancaria.nroCuenta}&tipoCuenta=${this.cliente.cuentaBancaria.tipoCuenta}`, { method: 'POST' })
          .then(async response => {
            console.log(await response.json());
          })
          .catch(error => console.log('error', error));


        fetch(`http://localhost:3000/estacionamiento/${this.estacionamientoSeleccionado}?estado=reservado`, { method: 'PUT' })
          .then(async response => {
            const estacionamiento = await response.json();
            this.estacionamientos = this.estacionamientos.filter(e => e._id !== estacionamiento._id)
          })
          .catch(error => console.log('error', error));

        this.setOpen(false)
      })
      .catch(error => console.log('error', error));
  }

  verMapa(estacionamiento: any) {
    this.nav.navigateForward('mapa-estacionamiento', { state: estacionamiento });
  }

  volverPerfilCliente() {
    this.nav.navigateForward("cliente")
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  seleccionarEstacionamiento(idEstacionamiento: string) {
    this.estacionamientoSeleccionado = idEstacionamiento
    this.setOpen(true)
  }
}