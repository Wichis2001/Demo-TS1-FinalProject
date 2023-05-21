import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from "sweetalert2";

import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent {

  miFormulario: FormGroup = this.fb.group({
    nickname:   [ '', [Validators.required] ],
    password:   [ '', [Validators.required, Validators.minLength( 4 )]]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService :AuthService,
               private snackbar: MatSnackBar ) {}

  login(){

    const { nickname, password } = this.miFormulario.value;

   this.authService.login( nickname, password )
                       .subscribe( ok => {
                         if( ok === true ){
                            this.showSnackbar(`${this.authService.usuario.nickname[0].toUpperCase()}${this.authService.usuario.nickname.substring(1)} se ha iniciado tu sesión correctamente`);
                            switch( this.authService.usuario.rol ) {
                              case 'maestro':
                                this.router.navigateByUrl('/maestro');
                              break;
                              case 'estudiante':
                                this.router.navigateByUrl('/estudiante');
                              break;
                              case 'admin':
                                this.router.navigateByUrl('/admin');
                              break;
                            }
                         }else{
                           Swal.fire( 'Error', ok, 'error')
                         }
                       })
  }

  showSnackbar( message: string ): void{
    this.snackbar.open( message, 'ok', {
      duration: 3500
    })
  }

}
