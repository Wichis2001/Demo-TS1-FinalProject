import { Component, OnInit } from '@angular/core';
import { JugarService } from '../../services/jugar.service';
import { Juego, ScoreAgregar } from '../../interfaces/juego.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styles: [
  ]
})
export class JuegoComponent implements OnInit{

  juego!: Juego;
  definidorTipo!: boolean;
  arregloPalabras: string[] = [];
  arregloPreguntas: string[] = [];
  currentIndex: number = 0;
  showNext: boolean = false;

  cantidadIntentos!: number;
  puntajeObtenido!: number;
  cumuloPuntaje: number = 0;

  scoreAgregar!: ScoreAgregar;

  constructor( private jugarService: JugarService,
               private snackbar: MatSnackBar,
               private router: Router,
               private authService: AuthService ){}

  ngOnInit(): void {
    this.juego = this.jugarService.juegoActual;

    if( this.juego.idModel === 'M1'){
      this.jugarService.getCodigosPalabras( this.jugarService.juegoActual.idGame )
                                .subscribe( res => {
                                  this.arregloPalabras = this.jugarService.shuffleArray(res);
                                })
      this.definidorTipo = true;
    } else{
      this.jugarService.getCodigosPregunta( this.jugarService.juegoActual.idGame )
                                  .subscribe( res => {
                                    this.arregloPreguntas = this.jugarService.shuffleArray( res );
                                    console.log( this.arregloPreguntas )
                                  })
      this.definidorTipo = false;

    }
  }

  determinarIntento( intento:number ){
    this.cantidadIntentos = intento;
    if( this.cantidadIntentos === 0 ){
      this.showNext= true;
    }
  }

  determinarPuntaje( puntaje:number ){
    this.puntajeObtenido = puntaje;
    if( this.puntajeObtenido !== 0 ){
      this.showNext = true;
    }
  }

  validarSiguienteScramble(){
    this.currentIndex++;
    this.showNext = false;
    if (this.currentIndex < this.arregloPalabras.length ){
      console.log( this.cantidadIntentos, this.puntajeObtenido, 'C' )
      if( this.cantidadIntentos > 0 && this.puntajeObtenido !== 0){
        this.cumuloPuntaje = this.cumuloPuntaje + this.puntajeObtenido;
      }
      this.showSnackbar('Pasaste a la siguiente pregunta :D!');
    } else {
      if( this.cantidadIntentos > 0 && this.puntajeObtenido !== 0){
        this.cumuloPuntaje = this.cumuloPuntaje + this.puntajeObtenido;
      }

      if( this.cumuloPuntaje > 0 ){
        Swal.fire({
          title: `Obtuviste ${ this.cumuloPuntaje} puntos Felicidades!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        this.scoreAgregar = {
          idUser: this.authService.usuario.idUser,
          idGame: this.jugarService.juegoActual.idGame,
          score: this.cumuloPuntaje
        }
        this.jugarService.addPuntaje( this.scoreAgregar ).subscribe();
      } else{
        Swal.fire({
          title: `Que lastima, obtuviste ${ this.cumuloPuntaje} puntos NO TE RINDAS!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      this.router.navigateByUrl('/estudiante/list-games')
    }
  }

  validarSiguientePreguntados(){
    this.currentIndex++;
    this.showNext = false;
    if (this.currentIndex < this.arregloPreguntas.length ){
      if( this.cantidadIntentos > 0 && this.puntajeObtenido !== 0){
        this.cumuloPuntaje = this.cumuloPuntaje + this.puntajeObtenido;
      }
      this.showSnackbar('Pasaste a la siguiente pregunta :D!');
    } else {
      if( this.cantidadIntentos > 0 && this.puntajeObtenido !== 0){
        this.cumuloPuntaje = this.cumuloPuntaje + this.puntajeObtenido;
      }

      if( this.cumuloPuntaje > 0 ){
        Swal.fire({
          title: `Obtuviste ${ this.cumuloPuntaje} puntos Felicidades!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        this.scoreAgregar = {
          idUser: this.authService.usuario.idUser,
          idGame: this.jugarService.juegoActual.idGame,
          score: this.cumuloPuntaje
        }
        this.jugarService.addPuntaje( this.scoreAgregar ).subscribe();
      } else{
        Swal.fire({
          title: `Que lastima, obtuviste ${ this.cumuloPuntaje} puntos NO TE RINDAS!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      this.router.navigateByUrl('/estudiante/list-games')
    }
  }
  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'ok', {
      duration: 2500,
    })
  }

}
