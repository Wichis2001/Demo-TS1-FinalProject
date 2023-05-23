import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent {

  miFormulario: FormGroup = this.fb.group({
    nickname:   [ '', [Validators.required], Validators.minLength( 2 ) ],
    name:       [ '', [Validators.required], Validators.minLength( 2 ) ],
    lastname:   [ '', [Validators.required], Validators.minLength( 2 ) ],
    password:   [ '', [Validators.required, Validators.minLength( 2 )]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,
               private snackbar: MatSnackBar ) {}

}
