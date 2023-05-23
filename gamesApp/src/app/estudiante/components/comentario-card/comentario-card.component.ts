import { Component, Input } from '@angular/core';
import { Comentario, ComentarioUsuario } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-comentario-card',
  templateUrl: './comentario-card.component.html',
  styles: [
  ]
})
export class ComentarioCardComponent {
  @Input() comentario!: ComentarioUsuario;

}
