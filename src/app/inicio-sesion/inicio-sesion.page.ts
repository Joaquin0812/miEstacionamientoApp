import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  mail: string = ""
  pass: string = ""
  constructor(public nav: NavController, route:Router) { }

  ngOnInit() {

  }
  irPageCliente(){
    this.nav.navigateForward('cliente')      
  }

  submitForm = () => {
    fetch(`http://localhost:3000/login?email=${this.mail}&password=${this.pass}&tipoUsuario=cliente`, { method: 'POST' })
      .then(async response => {
        if (response.status == 200) {
          // exitoso
          console.log('Login exitoso');
          // redirigir a pagina
          this.irPageCliente()

        } else {
          // fallido
          // mostrar mensaje de error
          console.log('error');

        }
      })
      .catch(error => console.log('error', error));
  }
}
