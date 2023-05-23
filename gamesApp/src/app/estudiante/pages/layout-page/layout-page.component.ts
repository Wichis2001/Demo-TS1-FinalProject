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
      label: 'Juegos Disponibles',
      icon: 'format_list_bulleted',
      url: './list-games'
    },
    {
      label: 'Juegos Sin Contraseña',
      icon: 'key_off',
      url: './list-games-without-password'
    },
    {
      label: 'Medallas',
      icon: 'workspace_premium',
      url: './medals'
    },
    {
      label: 'Notificaciones',
      icon: 'notifications',
      url: './notificaciones'
    },
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.router.navigate(['/auth']);
  }

}
