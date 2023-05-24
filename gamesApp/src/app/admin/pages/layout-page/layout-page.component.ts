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
      label: 'Usuarios Administradores',
      icon: 'person',
      url: './list-admin'
    },
    {
      label: 'Usuarios Profesores',
      icon: 'person',
      url: './list-teacher'
    },
    {
      label: 'Usuarios Estudiantes',
      icon: 'person',
      url: './list-student'
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
      label: 'Usuarios Más Comentarios',
      icon: 'summarize',
      url: './usuarios-comentarios'
    },
    {
      label: 'Agregar Notificacion',
      icon: 'notifications_active',
      url: './agregar-notificacion'
    },
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.router.navigate(['/auth']);
  }

}
