import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from "sweetalert2";

import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [ './register-page.component.css' ]
})
export class RegisterPageComponent {

  miFormulario: FormGroup = this.fb.group({
    nickname:   [ '', [Validators.required] ],
    name:       [ '', [Validators.required] ],
    lastname:   [ '', [Validators.required] ],
    password:   [ '', [Validators.required, Validators.minLength( 2 )]],
    rol:        ['',  [Validators.required] ],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
               private snackbar: MatSnackBar ) {}

  registro(){

   const { nickname, name, lastname, password, rol } = this.miFormulario.value;
   this.authService.registro(nickname, name, lastname, password, rol )
                      .subscribe( user => {
                        if( user ){
                          this.showSnackbar(`${this.authService.usuario.nickname[0].toUpperCase()}${this.authService.usuario.nickname.substring(1)} se ha creado con éxito`);
                          switch( this.authService.usuario.rol ) {
                            case 'maestro':
                              this.router.navigateByUrl('/maestro');
                            break;
                            case 'estudiante':
                              this.router.navigateByUrl('/estudiante');
                            break;
                          }
                        }else{

                          Swal.fire( 'Error', `El username: ${ nickname } ya se encuentra registrado`, 'error')
                        }
                      })
  }

  showSnackbar( message: string ): void{
    this.snackbar.open( message, 'ok', {
      duration: 3500
    })
  }
}
