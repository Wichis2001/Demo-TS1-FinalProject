import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Reporte } from '../../interfaces/game.interface';

@Component({
  selector: 'app-juegos-mas-usuarios',
  templateUrl: './juegos-mas-usuarios.component.html',
  styles: [
  ]
})
export class JuegosMasUsuariosComponent {

  columnas: string[] = ['No.', 'Nombre del Juego', 'Cantidad de Usuarios'];
  reportes: Reporte[] = [];

  constructor( private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getJuegosMasUsuarios().subscribe( res => {
      this.reportes = res;
    })

  }
}
