import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserComponent } from './pages/user/user.component';
import { UsuarioPuntosComponent } from './pages/usuario-puntos/usuario-puntos.component';
import { ProfesoresJuegosComponent } from './pages/profesores-juegos/profesores-juegos.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    ListUserComponent,
    UserComponent,
    UsuarioPuntosComponent,
    ProfesoresJuegosComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
