import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { QuesAn } from '../../interfaces/game.interface';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styles: [
  ]
})
export class PreguntadosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    question:     [ '', [ Validators.required, Validators.minLength(4) ]],
    answer1:      [ '', [ Validators.required, Validators.minLength(4) ]],
    answer2:      [ '', [ Validators.required, Validators.minLength(4) ]],
    answer3:      [ '', [ Validators.required, Validators.minLength(4) ]],
    answer4:      [ '', [ Validators.required, Validators.minLength(4) ]],
    score:        new FormControl<number>(1, {
                    validators: [Validators.required, Validators.min(1)]})
  });

  pregunta!: QuesAn;

  constructor( private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private gameService: GameService ) {}

  ngOnInit(): void {
    this.gameService.resetQuestion();
    this.gameService.resetScores();
  }

  guardarPregunta(){
    const { question, answer1, answer2, answer3, answer4, score } = this.miFormulario.value;
    this.pregunta = {
      question,
      answers: [
        {
          answer: answer1,
          value: 'true'
        },
        {
          answer: answer2,
          value: 'true'
        },
        {
          answer: answer3,
          value: 'true'
        },
        {
          answer: answer4,
          value: 'true'
        }
      ]
    }

    this.gameService.addQuestion( this.pregunta );
    this.gameService.addScore( score );

    this.miFormulario.reset();
  }
}
