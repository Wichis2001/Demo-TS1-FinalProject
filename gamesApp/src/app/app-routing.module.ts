import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then( m => m.EstudianteModule)
  },
  {
    path: 'maestro',
    loadChildren: () => import('./maestro/maestro.module').then( m => m.MaestroModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
@NgModule({

  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
