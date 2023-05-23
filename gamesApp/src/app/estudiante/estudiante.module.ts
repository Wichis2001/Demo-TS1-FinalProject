import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnireseJuegoComponent } from './pages/unirese-juego/unirese-juego.component';
import { MedallasComponent } from './pages/medallas/medallas.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { JuegosDisponiblesComponent } from './pages/juegos-disponibles/juegos-disponibles.component';
import { RankinsComponent } from './pages/rankins/rankins.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { JuegosSinContraseniaComponent } from './pages/juegos-sin-contrasenia/juegos-sin-contrasenia.component';
import { JuegosConContraseniaComponent } from './pages/juegos-con-contrasenia/juegos-con-contrasenia.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { MaterialModule } from '../material/material.module';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UnireseJuegoComponent,
    MedallasComponent,
    NotificacionesComponent,
    JuegosDisponiblesComponent,
    RankinsComponent,
    LayoutPageComponent,
    JuegosSinContraseniaComponent,
    JuegosConContraseniaComponent,
    JuegoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EstudianteRoutingModule,
    ReactiveFormsModule
  ]
})
export class EstudianteModule { }
