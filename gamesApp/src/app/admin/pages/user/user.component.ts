import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioGenerado } from '../../interfaces/user.interface';
import { switchMap } from 'rxjs';
import { ManejoUsuariosService } from '../../services/manejo-usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    idUser:     [ '' ],
    nickname:   [ '', [Validators.required, Validators.minLength(2)] ],
    name:       [ '', [Validators.required, Validators.minLength(2)] ],
    lastname:   [ '', [Validators.required, Validators.minLength(2)] ],
    password:   [ '', [Validators.required, Validators.minLength(2)] ]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private manejoUsuariosService: ManejoUsuariosService,
               private snackbar: MatSnackBar ) {}

  get currentUser(): UsuarioGenerado{
    const user = this.miFormulario.value as UsuarioGenerado;
    return user;
  }



  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ idUser }) => this.manejoUsuariosService.getUsuarioByID( idUser ) ),
      ).subscribe( usuario => {
        if ( !usuario ) {
          return this.router.navigateByUrl('/');
        }

        this.miFormulario.reset( usuario )
        return;
      });
  }

  onSubmit():void {

    if ( this.miFormulario.invalid ) return;

    if ( this.currentUser.idUser ) {
      this.manejoUsuariosService.putUsuario( this.currentUser )
        .subscribe( usuario => {
          this.showSnackbar(`${ this.currentUser.nickname } updated!`);
        });

      return;
    }

    this.manejoUsuariosService.crearUsuario( this.currentUser )
      .subscribe( user => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
        this.router.navigate(['/admin/edit', user.idUser ]);
        this.showSnackbar(`${ user.nickname } created!`);
      });
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }

}
