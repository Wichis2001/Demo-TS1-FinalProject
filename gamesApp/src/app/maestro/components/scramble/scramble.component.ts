import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styles: [
  ]
})
export class ScrambleComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    word:         [ '', [ Validators.required, Validators.minLength(4) ]],
    score:        new FormControl<number>(1, {
                    validators: [Validators.required, Validators.min(1)]})
  });


  constructor( private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private gameService: GameService ) {}

  ngOnInit(): void {
    this.gameService.resetWords();
    this.gameService.resetScores();
  }

  guardarPalabra(){
    const{ word, score } = this.miFormulario.value;
    this.gameService.addWord( word );
    this.gameService.addScore( score );
    this.miFormulario.reset();
  }

}
