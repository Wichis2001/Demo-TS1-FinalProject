import { Component } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JugarService } from '../../services/jugar.service';

@Component({
  selector: 'app-juegos-disponibles',
  templateUrl: './juegos-disponibles.component.html',
  styles: [
  ]
})
export class JuegosDisponiblesComponent {
  public juegos: Juego[] = [];

  constructor( private jugarService: JugarService ) {}

  ngOnInit(): void {
    this.jugarService.getAllGames()
      .subscribe( juegos =>{
        this.juegos = juegos
      } );
  }
}
