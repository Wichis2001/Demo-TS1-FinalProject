import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-juegos-mas-jugados',
  templateUrl: './juegos-mas-jugados.component.html',
  styles: [
  ]
})
export class JuegosMasJugadosComponent implements OnInit{

  columnas: string[] = ['No.', 'Nombre del Juego', 'Cantidad de Intentos'];
  reportes: Reporte[] = [];

  constructor( private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getJuegosMasJugados().subscribe( res => {
      this.reportes = res;
    })

  }
}
