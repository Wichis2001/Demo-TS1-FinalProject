import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { ProfesoresJuegosComponent } from './pages/profesores-juegos/profesores-juegos.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComentariosComponent } from './pages/usuarios-comentarios/usuarios-comentarios.component';
import { UsuariosAdministradoresComponent } from './pages/usuarios-administradores/usuarios-administradores.component';
import { UsuariosEstudiantesComponent } from './pages/usuarios-estudiantes/usuarios-estudiantes.component';
import { UsuariosMaestrosComponent } from './pages/usuarios-maestros/usuarios-maestros.component';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [
    UserComponent,
    ProfesoresJuegosComponent,
    LayoutPageComponent,
    UsuariosComentariosComponent,
    UsuariosAdministradoresComponent,
    UsuariosEstudiantesComponent,
    UsuariosMaestrosComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
