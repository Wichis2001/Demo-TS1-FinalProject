import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnireseJuegoComponent } from './pages/unirese-juego/unirese-juego.component';
import { MedallasComponent } from './pages/medallas/medallas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { JuegosDisponiblesComponent } from './pages/juegos-disponibles/juegos-disponibles.component';
import { RankinsComponent } from './pages/rankins/rankins.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    UnireseJuegoComponent,
    MedallasComponent,
    NotificacionesComponent,
    JuegosDisponiblesComponent,
    RankinsComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EstudianteModule { }
