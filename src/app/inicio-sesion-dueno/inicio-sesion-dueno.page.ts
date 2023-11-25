import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion-dueno',
  templateUrl: './inicio-sesion-dueno.page.html',
  styleUrls: ['./inicio-sesion-dueno.page.scss'],
})
export class InicioSesionDuenoPage implements OnInit {
  
  mail:string=""
  pass:string=""
  constructor(public route:Router, public nav:NavController) { }

  ngOnInit() {
  }

  irPageDueno(){
    this.nav.navigateForward('dueno')      
  }
  submitForm = () => {
    fetch(`http://localhost:3000/login?email=${this.mail}&password=${this.pass}&tipoUsuario=dueño`, { method: 'POST' })
      .then(async response => {
        if (response.status == 200) {
          // exitoso
          console.log('Login exitoso');

          const dueno = await response.json();
          localStorage.setItem("due", JSON.stringify(dueno))

          // redirigir a pagina
          this.irPageDueno()

        } else {
          // fallido
          // mostrar mensaje de error
          console.log('error');

        }
      })
      .catch(error => console.log('error', error));
  }

}
