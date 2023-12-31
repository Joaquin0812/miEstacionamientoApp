import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'consultar-estacionamientos',
    loadChildren: () => import('./consultar-estacionamientos/consultar-estacionamientos.module').then(m => m.ConsultarEstacionamientosPageModule)
  },
  {
    path: 'dueno',
    loadChildren: () => import('./dueno/dueno.module').then( m => m.DuenoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path:'generar-reporte',
    loadChildren: () => import('./generar-reporte/generar-reporte.module').then(m => m.GenerarReportePageModule)

  },
  {
    path: 'estacionamiento',
    loadChildren: () => import('./estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'historial-estacionamientos',
    loadChildren: () => import('./historial-estacionamientos/historial-estacionamientos.module').then( m => m.HistorialEstacionamientosPageModule)
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'reservar-estacionamiento',
    loadChildren: () => import('./reservar-estacionamiento/reservar-estacionamiento.module').then( m => m.ReservarEstacionamientoPageModule)
  },
  {
    path: 'inicio-sesion-dueno',
    loadChildren: () => import('./inicio-sesion-dueno/inicio-sesion-dueno.module').then( m => m.InicioSesionDuenoPageModule)
  },
  {
    path: 'mapa-estacionamiento',
    loadChildren: () => import('./mapa-estacionamiento/mapa-estacionamiento.module').then( m => m.MapaEstacionamientoPageModule)
  },
  {
    path: 'perfil-dueno',
    loadChildren: () => import('./perfil-dueno/perfil-dueno.module').then( m => m.PerfilDuenoPageModule)
  },  {
    path: 'historial-arrendatarios',
    loadChildren: () => import('./historial-arrendatarios/historial-arrendatarios.module').then( m => m.HistorialArrendatariosPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
