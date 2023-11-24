import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  mail: string = ""
  pass: string = ""
  constructor(public nav: NavController) { }

  ngOnInit() {

  }

  submitForm = () => {
    fetch(`http://localhost:3000/login?email=${this.mail}&password=${this.pass}&tipoUsuario=cliente`, { method: 'POST' })
      .then(async response => {
        if (response.status == 200) {
          // exitoso
          // redirigir a pagina
          console.log('exito');

        } else {
          // fallido
          // mostrar mensaje de error
          console.log('error');

        }
      })
      .catch(error => console.log('error', error));
  }
}
