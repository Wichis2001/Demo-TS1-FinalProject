import { Component, OnInit } from '@angular/core';
import { JugarService } from '../../services/jugar.service';
import { Juego, Score } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-unirese-juego',
  templateUrl: './unirese-juego.component.html',
  styles: [
  ]
})
export class UnireseJuegoComponent implements OnInit{

  juego!: Juego;
  columnas: string[] = ['No.', 'Jugador', 'Score'];
  scores: Score[] = [];

  constructor( public jugarService: JugarService ) {}

  ngOnInit(): void {
    this.juego = this.jugarService.juegoActual;

    this.jugarService.getScoresGame( this.juego.idGame ).subscribe( res => {
      this.scores = res;
    })

    this.jugarService.getComentarios();
  }
}
