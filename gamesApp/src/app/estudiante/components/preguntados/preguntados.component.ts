import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JugarService } from '../../services/jugar.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs';
import { QuestionFinal, RespuestaResponse } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styles: [
  ]
})
export class PreguntadosComponent {

  @Output() cantidadIntentos: EventEmitter<number> = new EventEmitter<number>();
  @Output() puntaje: EventEmitter<number> = new EventEmitter<number>();
  @Input() idPregunta!:string;

  puntajeObtenido: number = 0;
  pregunta!: string;
  conjuntoPreguntas: string[] = [];
  respuestas: QuestionFinal[] = [];
  codigosRespuestas: string[] = [];

  miFormulario: FormGroup = this.fb.group({
    respuesta:         [ '', [ Validators.required, Validators.minLength(1) ]],
  });

  intentosPermitidos: number = 2;

  constructor( private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private jugarService: JugarService,
               private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.jugarService.getTextQuestion( this.idPregunta ).subscribe(
      question => this.pregunta = question.question
    );
      console.log('Paso')
    this.jugarService.getCodigosRespuesta( this.idPregunta )
                        .pipe( tap( res => {
                          this.codigosRespuestas = res
                        } ))
                        .subscribe(()=>{
                          for (let x = 0; x < this.codigosRespuestas.length; x++) {
                            this.jugarService.getTextAnswer( this.codigosRespuestas[x] ).subscribe( res=>{
                              const preguntaAsignar: QuestionFinal = {
                                idAnswer: this.codigosRespuestas[x],
                                pregunta: res.res
                              }
                              this.respuestas.push( preguntaAsignar )
                            })

                          }
                        });

    this.intentosPermitidos = 2;
  }

  validarRespuesta(){


    const { respuesta } = this.miFormulario.value;
    console.log( this.idPregunta, respuesta )
    this.jugarService.getPuntajePreguntados( this.idPregunta, respuesta )
                        .pipe( tap( res => {
                                this.puntajeObtenido = res.score;
                              })
                        ).subscribe( ()=>{
                          if( this.puntajeObtenido === 0 && this.intentosPermitidos > 0 ){
                            this.intentosPermitidos--;
                            this.cantidadIntentos.emit( this.intentosPermitidos );
                            this.puntaje.emit( this.puntajeObtenido );
                            this.showSnackbar('La respuesta ingresada es incorrecta')
                          } else if( this.puntajeObtenido !== 0 && this.intentosPermitidos > 0 ){
                            this.cantidadIntentos.emit( this.intentosPermitidos );
                            this.puntaje.emit( this.puntajeObtenido );
                            this.showSnackbar(`La respuesta ingresada es correcta, obtuviste ${ this.puntajeObtenido } puntos`)
                          }
                          this.miFormulario.reset();
                        })
  }


  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'ok', {
      duration: 2500,
    })
  }

}
