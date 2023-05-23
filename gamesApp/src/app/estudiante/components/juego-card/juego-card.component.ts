import { Component, Input } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JugarService } from '../../services/jugar.service';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styles: [
  ]
})
export class JuegoCardComponent {

  @Input() juego!: Juego;

  constructor( private jugarService: JugarService ){}

  guardarJuego():void {
    this.jugarService.definirJuegoActual( this.juego );
  }
}
