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
    fetch(`http://localhost:3000/historial/byCliente?idCliente=${this.cliente._id}`, { method: 'GET' })
      .then(async response => {
        const historials: any[] = await response.json();
        this.historials = historials;
        localStorage.setItem("his", JSON.stringify(historials))

        const nuevoHistorial = historials.map(h => {
          fetch(`http://localhost:3000/dueno/byEstacionamiento?idEstacionamiento=${h.idEstacionamiento}`, { method: 'GET' })
            .then(async response => {
              const dueno = await response.json();
              h.dueno = dueno
              return h
            })
            .catch(error => console.log('error', error));
        })
        console.log(nuevoHistorial);
      })
      .catch(error => console.log('error', error));
  }

  irCalificarEstacionamiento(estacionamiento: any) {
    localStorage.setItem("calificar-estacionamiento", JSON.stringify(estacionamiento))
    this.route.navigate(['/calificar-estacionamiento']);
  }

  volverPerfilCliente() {
    this.nav.navigateForward("cliente")
  }
}
