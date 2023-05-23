import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UnireseJuegoComponent } from './pages/unirese-juego/unirese-juego.component';
import { MedallasComponent } from './pages/medallas/medallas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { RankinsComponent } from './pages/rankins/rankins.component';
import { JuegosDisponiblesComponent } from './pages/juegos-disponibles/juegos-disponibles.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { JuegosConContraseniaComponent } from './pages/juegos-con-contrasenia/juegos-con-contrasenia.component';
import { JuegosSinContraseniaComponent } from './pages/juegos-sin-contrasenia/juegos-sin-contrasenia.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list-games',
        component: JuegosDisponiblesComponent
      },
      {
        path: 'list-games-password',
        component: JuegosConContraseniaComponent
      },
      {
        path: 'list-games-without-password',
        component: JuegosSinContraseniaComponent
      },
      {
        path: 'join-game/:id',
        component: UnireseJuegoComponent
      },
      {
        path: 'play/:id',
        component: JuegoComponent
      },
      {
        path: 'medals',
        component: MedallasComponent
      },
      {
        path: 'notificaciones',
        component: NotificacionesComponent
      },
      {
        path: 'rankings',
        component: RankinsComponent
      },
      {
        path: '**',
        redirectTo: 'list-games'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EstudianteRoutingModule { }
