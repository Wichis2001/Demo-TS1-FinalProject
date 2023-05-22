import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Games } from '../../interfaces/game.interface';

@Component({
  selector: 'app-juegos-creados',
  templateUrl: './juegos-creados.component.html',
  styles: [
  ]
})
export class JuegosCreadosComponent implements OnInit{

  columnas: string[] = ['No.', 'Nombre Juego', 'Password', 'Tipo de Juego'];
  games: Games[] = [];

  constructor( private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe( res => {
      this.games = res;
    })

  }
}
