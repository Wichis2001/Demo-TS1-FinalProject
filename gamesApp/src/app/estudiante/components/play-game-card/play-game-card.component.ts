import { Component, Input } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JugarService } from '../../services/jugar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-play-game-card',
  templateUrl: './play-game-card.component.html',
  styles: [
  ]
})
export class PlayGameCardComponent {

  @Input() juego!: Juego;
  miFormulario: FormGroup = this.fb.group({
    password:     [ '', [ Validators.required, Validators.minLength(1) ]],
  });

  constructor( private jugarService: JugarService,
               private snackbar: MatSnackBar,
               private fb: FormBuilder) {}

  validarFormulario(): boolean {
    if( this.jugarService.juegoActual.passwrd !== null && this.jugarService.juegoActual.passwrd !== '' ){
      return true;
    }

    return false;
  }

  jugarJuego(){
    if( this.validarFormulario() ){
      if( this.miFormulario.invalid ){
        this.showSnackbar('El formulario tiene aún campos vacíos');
        return;
      }
      const { password } = this.miFormulario.value;
      this.jugarService.getVerifyPassword( this.juego.idGame, password )
                              .subscribe( res => {
                                if( res === 'correct'){
                                  this.showSnackbar('Contraseña es correcta');
                                  return;
                                } else{
                                  this.showSnackbar('Contraseña es incorrecta');
                                  this.miFormulario.reset();
                                  return;
                                }
                              })
    } else{
      
    }
  }

  showSnackbar( message: string ): void{
    this.snackbar.open( message, 'ok', {
      duration: 3500
    })
  }

}
