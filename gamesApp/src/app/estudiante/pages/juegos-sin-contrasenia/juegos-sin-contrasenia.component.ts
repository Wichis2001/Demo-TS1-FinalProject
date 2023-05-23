import { Component } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JugarService } from '../../services/jugar.service';

@Component({
  selector: 'app-juegos-sin-contrasenia',
  templateUrl: './juegos-sin-contrasenia.component.html',
  styles: [
  ]
})
export class JuegosSinContraseniaComponent {
  public juegos: Juego[] = [];

  constructor( private jugarService: JugarService ) {}

  ngOnInit(): void {
    this.jugarService.getGamesFree()
      .subscribe( juegos =>{
        this.juegos = juegos
      } );
  }
}
