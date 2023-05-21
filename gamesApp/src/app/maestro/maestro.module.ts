import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { JuegosCreadosComponent } from './pages/juegos-creados/juegos-creados.component';
import { JuegosMasUsuariosComponent } from './pages/juegos-mas-usuarios/juegos-mas-usuarios.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaestroRoutingModule } from './maestro-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateGameComponent,
    JuegosCreadosComponent,
    JuegosMasUsuariosComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaestroRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaestroModule { }
