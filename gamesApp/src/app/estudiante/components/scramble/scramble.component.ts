import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JugarService } from '../../services/jugar.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styles: [
  ]
})
export class ScrambleComponent implements OnInit{

  @Output() cantidadIntentos: EventEmitter<number> = new EventEmitter<number>();
  @Output() puntaje: EventEmitter<number> = new EventEmitter<number>();
  @Input() idWord!:string;

  puntajeObtenido: number = 0;
  palabraAdivinar!: string;

  miFormulario: FormGroup = this.fb.group({
    answer:         [ '', [ Validators.required, Validators.minLength(1) ]],
  });

  intentosPermitidos: number = 3;

  constructor( private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private jugarService: JugarService,
               private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.jugarService.getPalabra( this.idWord )
              .pipe(
                switchMap( ( palabra => this.jugarService.getPalabraDesordenada( palabra.word ) ) )
              )
              .subscribe( palabra => this.palabraAdivinar = palabra.word );
    this.intentosPermitidos = 3;
  }

  validarRespuesta(){


    const { answer } = this.miFormulario.value;
    this.jugarService.getPuntaje( this.idWord, answer )
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
