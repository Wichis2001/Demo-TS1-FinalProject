import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { JuegosCreadosComponent } from './pages/juegos-creados/juegos-creados.component';
import { JuegosMasUsuariosComponent } from './pages/juegos-mas-usuarios/juegos-mas-usuarios.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'create-game',
        component: CreateGameComponent
      },
      {
        path: 'games-created',
        component: JuegosCreadosComponent
      },
      {
        path: 'juegos-usuarios',
        component: JuegosMasUsuariosComponent
      },
      {
        path: '**',
        redirectTo: 'create-game'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
