import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-dueno',
  templateUrl: './perfil-dueno.page.html',
  styleUrls: ['./perfil-dueno.page.scss'],
})
export class PerfilDuenoPage implements OnInit {

  dueno:any
  constructor(public route:Router, public nav:NavController) {
    const due: string | null=localStorage.getItem("due")
    if (due!==null){
    const dueno = JSON.parse(due)
    this.dueno=dueno
    }
   }

  ngOnInit() {
  }

  volverDueno(){
    this.nav.navigateForward("dueno")
  }
}
