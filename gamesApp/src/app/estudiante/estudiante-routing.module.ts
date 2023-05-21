import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UnireseJuegoComponent } from './pages/unirese-juego/unirese-juego.component';
import { MedallasComponent } from './pages/medallas/medallas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { RankinsComponent } from './pages/rankins/rankins.component';
import { JuegosDisponiblesComponent } from './pages/juegos-disponibles/juegos-disponibles.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'join-game',
        component: UnireseJuegoComponent
      },
      {
        path: 'medallas',
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
        path: 'list-games',
        component: JuegosDisponiblesComponent
      },
      {
        path: '**',
        redirectTo: 'join-game'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EstudianteRoutingModule { }
