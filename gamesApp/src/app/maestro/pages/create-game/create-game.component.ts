import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Models } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styles: [
  ]
})
export class CreateGameComponent implements OnInit{



  validarEscritura: boolean = false;
  validarBoton: boolean = true;
  valor: number = 0;

  miFormulario: FormGroup = this.fb.group({
    nameGame:     [ '', [ Validators.required, Validators.minLength(4) ]],
    passwrd:      [ '', [ Validators.required, Validators.minLength(4) ]],
    descriptn:    [ '', [Validators.required, Validators.minLength(10)]],
    idModel:      new FormControl<Models>( Models.ScrambleGame )
  });

  constructor( private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private gamesService: GameService ) {}

  ngOnInit(): void {
    this.gamesService.resetQuestion();
    this.gamesService.resetScores();
  }



  public games = [
    {
      id: 'M1',
      desc: 'Scramble Game'
    },
    {
      id: 'M2',
      desc: 'Preguntados Game'
    }
  ]

  establecerJuego(){
    this.validarEscritura = true;
    this.validarBoton = false;

    const { idModel } = this.miFormulario.value;
    console.log( idModel )
    switch ( idModel ) {
      case 'M1':
        this.valor = 1;
        break;
      case 'M2':
        this.valor = 2;
        break;
      default:
        this.valor = 0;
        break;
    }
  }

  validarBotonForm(): boolean{
    if( this.miFormulario.valid && this.validarBoton ){
      return false;
    }
    return true;
  }

  verificarBotones(): boolean {
    if( this.gamesService.quesAn.length > 0 ){
      return false;
    }

    return true;
  }

  guardarJuego(){

  }
}
