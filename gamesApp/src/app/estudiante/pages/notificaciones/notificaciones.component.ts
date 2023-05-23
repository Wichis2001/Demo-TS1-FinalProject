import { Component, OnInit } from '@angular/core';
import { Notificaciones } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styles: [
  ]
})
export class NotificacionesComponent implements OnInit{

  columnas: string[] = ['No.', 'Título Notificación', 'Descripción'];
  notificaciones: Notificaciones[] = [];

  constructor( private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getNotificaciones().subscribe( res => {
      this.notificaciones = res;
    })

  }
}
