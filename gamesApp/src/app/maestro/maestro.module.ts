import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { JuegosCreadosComponent } from './pages/juegos-creados/juegos-creados.component';
import { JuegosMasUsuariosComponent } from './pages/juegos-mas-usuarios/juegos-mas-usuarios.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaestroRoutingModule } from './maestro-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { ScrambleComponent } from './components/scramble/scramble.component';
import { IdModelPipe } from './pipes/id-model.pipe';
import { PasswordPipe } from './pipes/password.pipe';



@NgModule({
  declarations: [
    CreateGameComponent,
    JuegosCreadosComponent,
    JuegosMasUsuariosComponent,
    LayoutPageComponent,
    PreguntadosComponent,
    ScrambleComponent,
    IdModelPipe,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaestroRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaestroModule { }
