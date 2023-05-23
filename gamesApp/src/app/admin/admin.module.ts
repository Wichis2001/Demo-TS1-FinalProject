import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserComponent } from './pages/user/user.component';
import { UsuarioPuntosComponent } from './pages/usuario-puntos/usuario-puntos.component';
import { ProfesoresJuegosComponent } from './pages/profesores-juegos/profesores-juegos.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListUserComponent,
    UserComponent,
    UsuarioPuntosComponent,
    ProfesoresJuegosComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
