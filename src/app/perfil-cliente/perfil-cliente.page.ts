import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  cliente:any
  constructor(public route:Router, public nav:NavController) {
    
    const cli: string | null=localStorage.getItem("cli")
    if (cli!==null){
    const cliente = JSON.parse(cli)
    this.cliente=cliente
    }

   }


  ngOnInit() {
    
  }

  
  volverCliente(){
    this.nav.navigateForward("cliente")
  }
}
