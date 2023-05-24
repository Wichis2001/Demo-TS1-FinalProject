import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UserComponent } from './pages/user/user.component';
import { ProfesoresJuegosComponent } from './pages/profesores-juegos/profesores-juegos.component';
import { UsuariosComentariosComponent } from './pages/usuarios-comentarios/usuarios-comentarios.component';
import { UsuariosAdministradoresComponent } from './pages/usuarios-administradores/usuarios-administradores.component';
import { UsuariosMaestrosComponent } from './pages/usuarios-maestros/usuarios-maestros.component';
import { UsuariosEstudiantesComponent } from './pages/usuarios-estudiantes/usuarios-estudiantes.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list-admin',
        component: UsuariosAdministradoresComponent
      },
      {
        path: 'list-teacher',
        component: UsuariosMaestrosComponent
      },
      {
        path: 'list-student',
        component: UsuariosEstudiantesComponent
      },
      {
        path: 'new-user',
        component: UserComponent
      },
      {
        path: 'edit/:idUser',
        component: UserComponent
      },
      {
        path: 'profesores-juegos',
        component: ProfesoresJuegosComponent
      },
      {
        path: 'usuarios-comentarios',
        component: UsuariosComentariosComponent
      },
      {
        path: '**',
        redirectTo: 'list-admin'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
