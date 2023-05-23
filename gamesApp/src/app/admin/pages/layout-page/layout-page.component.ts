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
      label: 'Usuarios Registrados',
      icon: 'person',
      url: './list-user'
    },
    {
      label: 'Agregar Usuario',
      icon: 'add',
      url: './new-user'
    },
    {
      label: 'Maestros Más Juegos',
      icon: 'summarize',
      url: './profesores-juegos'
    },
    {
      label: 'Usuarios Más Puntos',
      icon: 'summarize',
      url: './usuarios-puntos'
    },
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.router.navigate(['/auth']);
  }

}
