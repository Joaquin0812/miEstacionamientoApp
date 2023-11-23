import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  miVariable:number =0;
  constructor(public route:Router, public nav:NavController) { }

  editarVariable() {
    if (!isNaN(this.miVariable)) {
      // El valor es un número, realiza la lógica de guardado
      console.log('Valor editado:', this.miVariable);
    } else {
      // El valor no es un número, maneja el error o muestra un mensaje al usuario
      console.log('Error: Debe ingresar solo números.');
    }
  }

  ngOnInit() {
  }
  volverCliente(){
    this.nav.navigateForward("cliente")
  }
}
