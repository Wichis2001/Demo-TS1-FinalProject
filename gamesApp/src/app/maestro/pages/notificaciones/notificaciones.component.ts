import { Component } from '@angular/core';
import { Notificaciones } from 'src/app/estudiante/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/estudiante/services/usuario.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styles: [
  ]
})
export class NotificacionesComponent {

  columnas: string[] = ['No.', 'Título Notificación', 'Descripción'];
  notificaciones: Notificaciones[] = [];

  constructor( private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getNotificaciones().subscribe( res => {
      this.notificaciones = res;
    })

  }
}
