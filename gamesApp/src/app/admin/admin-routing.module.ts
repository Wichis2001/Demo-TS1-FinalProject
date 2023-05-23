import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserComponent } from './pages/user/user.component';
import { ProfesoresJuegosComponent } from './pages/profesores-juegos/profesores-juegos.component';
import { UsuarioPuntosComponent } from './pages/usuario-puntos/usuario-puntos.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list-user',
        component: ListUserComponent
      },
      {
        path: 'new-user',
        component: UserComponent
      },
      {
        path: 'edit/:id',
        component: UserComponent
      },
      {
        path: 'profesores-juegos',
        component: ProfesoresJuegosComponent
      },
      {
        path: 'usuarios-puntos',
        component: UsuarioPuntosComponent
      },
      {
        path: '**',
        redirectTo: 'list-user'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
