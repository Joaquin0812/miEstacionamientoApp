import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  mail:string=""
  pass:string=""

  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  submitForm=()=>{
    console.log(this.mail)
    console.log(this.pass)
    const dominio=this.mail.split("@")[1]
    console.log(dominio);
    
    if (dominio=="cliente.cl"){
      const nombre=this.mail.split(".")[0]
      this.nav.navigateForward("cliente",{state:{nombre:nombre,correo:this.mail}})
    }else if(dominio=="dueno.cl"){
      const nombre=this.mail.split(".")[0]
      this.nav.navigateForward("dueno",{state:{nombre:nombre,correo:this.mail}})
    }else{
      
    }
    
  }
}
