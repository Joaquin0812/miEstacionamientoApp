import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  estacionamientos: Estacionamiento[] = [
    { direccion: 'Avenida Santa Rosa 270', valorPorHora: 3000, estado: 'Habilitado' }
  ];
  nuevaDireccion: string = '';
  nuevoValorPorHora: number = 0;

  constructor(private router: Router) {}
  
  cambiarEstado(index: number) {
    const estadoActual = this.estacionamientos[index].estado;
    this.estacionamientos[index].estado = (estadoActual === 'Habilitado') ? 'Habilitando...' : 'Deshabilitando...';

    setTimeout(() => {
      this.estacionamientos[index].estado = (estadoActual === 'Habilitado') ? 'Deshabilitado' : 'Habilitado';
    }, 2000); // Cambiar a 2000 para simular una espera de 2 segundos
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
