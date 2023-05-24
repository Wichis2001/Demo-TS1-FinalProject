import { Component, Input } from '@angular/core';
import { UsuarioGenerado } from '../../interfaces/user.interface';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent {
  @Input() usuario!: UsuarioGenerado;
  @Input() tipoUsuario!: string;
}
