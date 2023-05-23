import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  usuario:Usuario = this.authService.usuario;

  public sidebarItems = [
    {
      label: 'Crear Juego',
      icon: 'sports_esports',
      url: './create-game'
    },
    {
      label: 'Juegos Creados',
      icon: 'list_alt',
      url: './games-created'
    },
    {
      label: 'Juegos Más Usurios',
      icon: 'groups',
      url: './juegos-usuarios'
    },
    {
      label: 'Juegos Más Jugados',
      icon: 'groups',
      url: './juegos-jugados'
    },
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.router.navigate(['/auth']);
  }
}
